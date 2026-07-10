// Conversation logging for the Alpha Sports chatbot.
//
// Writes each turn to a Supabase table via the REST API (no SDK dependency).
// If SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set, it degrades to a
// silent no-op so the bot keeps working with zero logging infra. This is the
// "own your conversation data" layer — the table is yours.
//
// Table to create in Supabase (SQL):
//
//   create table chat_messages (
//     id          uuid primary key default gen_random_uuid(),
//     created_at  timestamptz not null default now(),
//     client      text not null default 'alpha-sports',
//     session_id  text,
//     role        text,          -- 'user' | 'assistant'
//     content     text,
//     meta        jsonb
//   );
//   alter table chat_messages enable row level security;  -- no public policies → only the service key writes

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const loggingEnabled = Boolean(SUPABASE_URL && SUPABASE_KEY);

type Row = {
  client: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  meta?: Record<string, unknown>;
};

/**
 * Persist one user turn + the assistant reply. Fire-and-forget: never throws,
 * never blocks the response. Failures are swallowed (logging must not break chat).
 */
export async function logTurn(params: {
  sessionId: string;
  userMessage: string;
  assistantMessage: string;
  meta?: Record<string, unknown>;
}): Promise<void> {
  if (!loggingEnabled) return;

  const rows: Row[] = [
    {
      client: "alpha-sports",
      session_id: params.sessionId,
      role: "user",
      content: params.userMessage,
      meta: params.meta,
    },
    {
      client: "alpha-sports",
      session_id: params.sessionId,
      role: "assistant",
      content: params.assistantMessage,
      meta: params.meta,
    },
  ];

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY as string,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(rows),
    });
  } catch {
    // Swallow — logging is best-effort and must never affect the user.
  }
}
