"use client";

import { useFormStatus } from "react-dom";
import { anmeldungLoeschen } from "./actions";

function Knopf() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        background: "#fff",
        color: "#B42318",
        border: "1px solid #F3C4BF",
        borderRadius: 8,
        padding: "6px 12px",
        fontSize: 12.5,
        fontWeight: 700,
        cursor: pending ? "wait" : "pointer",
        opacity: pending ? 0.6 : 1,
        whiteSpace: "nowrap",
      }}
    >
      {pending ? "Wird gelöscht…" : "Löschen"}
    </button>
  );
}

export function LoeschenKnopf({
  id,
  name,
  schluessel,
}: {
  id: number;
  name: string;
  schluessel: string;
}) {
  return (
    <form
      action={anmeldungLoeschen}
      onSubmit={(e) => {
        const ok = window.confirm(
          `Anmeldung von ${name} wirklich löschen?\n\nDer Startplatz wird wieder frei. Das lässt sich nicht rückgängig machen.`,
        );
        if (!ok) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="key" value={schluessel} />
      <Knopf />
    </form>
  );
}
