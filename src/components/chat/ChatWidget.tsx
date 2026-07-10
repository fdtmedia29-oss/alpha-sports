"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, X, Send, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/content";

// --- UI constants (kept here so the heavy server-side KB never ships to the client) ---
const BOOKING_URL = siteConfig.bookingUrl; // /kostenloses-beratungsgespraech
const GREETING =
  "Hoi! 👋 Ich bin der KI-Assistent von Alpha Sports. Frag mich zu Personal Training, Gruppenkursen, Ablauf oder Preisen — oder buch direkt dein kostenloses Beratungsgespräch.";
const QUICK_REPLIES: { label: string; book?: boolean }[] = [
  { label: "Was kostet Personal Training?" },
  { label: "Welche Gruppenkurse gibt es?" },
  { label: "Wie läuft das Beratungsgespräch ab?" },
  { label: "Kostenloses Beratungsgespräch buchen", book: true },
];

type Message = { role: "user" | "assistant"; content: string };

// Renders assistant text with minimal markdown: [label](url) links + newlines.
// Everything else is plain text (React escapes it), so this is XSS-safe.
function RichText({ text }: { text: string }) {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [, label, href] = m;
    const internal = href.startsWith("/");
    nodes.push(
      internal ? (
        <Link
          key={i++}
          href={href}
          className="font-semibold text-text underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-hover"
        >
          {label}
        </Link>
      ) : (
        <a
          key={i++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-text underline decoration-accent decoration-2 underline-offset-2"
        >
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <span className="whitespace-pre-wrap">{nodes}</span>;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const sessionId = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!sessionId.current) {
      sessionId.current =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `s_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }
  }, []);

  // Autoscroll on new content.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;

    const next: Message[] = [...messages, { role: "user", content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, sessionId: sessionId.current }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`bad response ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Entschuldige, da ist gerade etwas schiefgelaufen. Versuch es bitte nochmal — oder buch dein kostenloses Beratungsgespräch direkt über den Button oben.",
        };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  }

  const showQuickReplies = messages.length === 0;
  const lastMsg = messages[messages.length - 1];
  const showTyping = busy && lastMsg?.role === "assistant" && !lastMsg.content;

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Chat schliessen" : "Chat öffnen"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-dark text-accent shadow-lg ring-1 ring-black/5 transition-transform hover:scale-110"
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {open ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MessageSquareText className="h-6 w-6" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[600px] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl sm:right-6"
            role="dialog"
            aria-label="Alpha Sports Chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 bg-dark px-4 py-3 text-white">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Alpha Sports</p>
                  <p className="text-[11px] text-white/60">KI-Assistent</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href={BOOKING_URL}
                  className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-dark transition-colors hover:bg-accent-hover"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Gratis Beratung
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Schliessen"
                  className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-bg-alt px-4 py-4"
            >
              {/* Greeting */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-sm text-text">
                  {GREETING}
                </div>
              </div>

              {messages.map((m, idx) =>
                m.role === "user" ? (
                  <div key={idx} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-dark px-3.5 py-2.5 text-sm text-white">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  m.content && (
                    <div key={idx} className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-sm text-text">
                        <RichText text={m.content} />
                      </div>
                    </div>
                  )
                )
              )}

              {showTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-surface px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies */}
              {showQuickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) =>
                    q.book ? (
                      <Link
                        key={q.label}
                        href={BOOKING_URL}
                        className="rounded-full border border-dark bg-dark px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-primary-hover"
                      >
                        {q.label}
                      </Link>
                    ) : (
                      <button
                        key={q.label}
                        onClick={() => send(q.label)}
                        className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text"
                      >
                        {q.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border bg-bg px-3 py-3">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  placeholder="Schreib deine Frage…"
                  className="max-h-28 flex-1 resize-none rounded-xl border border-border bg-bg-alt px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:border-dark focus:outline-none"
                />
                <button
                  onClick={() => send(input)}
                  disabled={busy || !input.trim()}
                  aria-label="Senden"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-dark text-accent transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-muted">
                KI-Assistent · Angaben ohne Gewähr
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
