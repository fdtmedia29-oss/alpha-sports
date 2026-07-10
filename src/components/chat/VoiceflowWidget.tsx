"use client";

import { useEffect } from "react";

// Alpha Sports Voiceflow project (webchat). Published version = "production".
const PROJECT_ID = "6a4fdf1fa7603984cf148198";

// Proactive bubble that pops up by the launcher on load. Welcomes people as
// Alpha Sports — no "I'm an AI assistant" self-intro.
const INTRO =
  "Hoi! 👋 Willkommen bei Alpha Sports. Hast du eine Frage zu Training, Kursen oder Terminen? Ich helf dir gern weiter.";

/**
 * Loads the Voiceflow web-chat widget for Alpha Sports and pushes a proactive
 * intro message. Bot logic (prompt, KB, rules) + appearance (colour, name,
 * avatar) live in Voiceflow — this only mounts the widget on the site.
 */
export default function VoiceflowWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      __vfLoaded?: boolean;
      voiceflow?: {
        chat?: {
          load: (cfg: unknown) => unknown;
          proactive?: { clear?: () => void; push?: (...m: unknown[]) => void };
        };
      };
    };
    if (w.__vfLoaded) return;
    w.__vfLoaded = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      const chat = w.voiceflow?.chat;
      if (!chat) return;
      // versionID must live inside `verify` for widget-next 2.x — top-level
      // throws "missing versionID".
      Promise.resolve(
        chat.load({
          verify: { projectID: PROJECT_ID, versionID: "production" },
          url: "https://general-runtime.voiceflow.com",
        })
      ).finally(() => {
        try {
          chat.proactive?.clear?.();
          chat.proactive?.push?.({ type: "text", payload: { message: INTRO } });
        } catch {
          // proactive is best-effort; never break the widget over it
        }
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.body.appendChild(script);
  }, []);

  return null;
}
