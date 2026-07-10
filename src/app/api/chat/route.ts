import OpenAI from "openai";
import {
  CHAT_MODEL,
  CHAT_BASE_URL,
  CHAT_API_KEY,
  MAX_OUTPUT_TOKENS,
  buildSystemPrompt,
} from "@/lib/chat-config";
import { rateLimit, sweep } from "@/lib/rate-limit";
import { logTurn } from "@/lib/chat-log";

export const runtime = "nodejs";
export const maxDuration = 30;

// Hard input caps — bound abuse cost regardless of the in-memory rate limiter.
const MAX_MESSAGES = 24;
const MAX_CHARS_PER_MESSAGE = 2000;

type Msg = { role: "user" | "assistant"; content: string };

// Build the system prompt once per warm instance (it embeds the whole KB).
let SYSTEM_PROMPT: string | null = null;
function systemPrompt(): string {
  if (!SYSTEM_PROMPT) SYSTEM_PROMPT = buildSystemPrompt();
  return SYSTEM_PROMPT;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function sanitize(messages: unknown): Msg[] | null {
  if (!Array.isArray(messages)) return null;
  const out: Msg[] = [];
  for (const m of messages) {
    if (
      !m ||
      typeof m !== "object" ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string"
    ) {
      return null;
    }
    const content = m.content.trim().slice(0, MAX_CHARS_PER_MESSAGE);
    if (content) out.push({ role: m.role, content });
  }
  // Keep only the most recent turns and ensure it ends on a user message.
  const trimmed = out.slice(-MAX_MESSAGES);
  if (trimmed.length === 0 || trimmed[trimmed.length - 1].role !== "user") {
    return null;
  }
  return trimmed;
}

export async function POST(req: Request) {
  if (!CHAT_API_KEY) {
    return Response.json(
      { error: "Chat ist momentan nicht verfügbar." },
      { status: 503 }
    );
  }

  // Rate limit.
  const ip = clientIp(req);
  if (Math.random() < 0.05) sweep();
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte kurz warten." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } }
    );
  }

  // Parse + validate.
  let body: { messages?: unknown; sessionId?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const messages = sanitize(body.messages);
  if (!messages) {
    return Response.json({ error: "Ungültige Nachrichten." }, { status: 400 });
  }
  const sessionId =
    typeof body.sessionId === "string" ? body.sessionId.slice(0, 80) : "anon";
  const lastUser = messages[messages.length - 1].content;

  const client = new OpenAI({ apiKey: CHAT_API_KEY, baseURL: CHAT_BASE_URL });
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let full = "";
      try {
        const completion = await client.chat.completions.create({
          model: CHAT_MODEL,
          max_tokens: MAX_OUTPUT_TOKENS,
          temperature: 0.3,
          stream: true,
          messages: [
            { role: "system", content: systemPrompt() },
            ...messages,
          ],
        });

        for await (const chunk of completion) {
          const delta = chunk.choices[0]?.delta?.content;
          if (delta) {
            full += delta;
            controller.enqueue(encoder.encode(delta));
          }
        }
        controller.close();
      } catch (err) {
        console.error("[chat] stream error:", err);
        if (!full) {
          controller.enqueue(
            encoder.encode(
              "Entschuldige, da ist gerade etwas schiefgelaufen. Versuch es bitte nochmal oder buch dein kostenloses Beratungsgespräch direkt über den Button."
            )
          );
        }
        controller.close();
      }

      // Fire-and-forget logging (never blocks the user).
      void logTurn({
        sessionId,
        userMessage: lastUser,
        assistantMessage: full,
        meta: { ua: req.headers.get("user-agent") || undefined },
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
