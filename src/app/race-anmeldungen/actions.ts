"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@/lib/race";

// Absage aus der Liste: Alpha Sports kann eine Anmeldung selbst entfernen.
// Gleicher Schlüssel wie für die Liste, sonst passiert nichts.
export async function anmeldungLoeschen(formData: FormData) {
  const key = formData.get("key");
  const id = Number(formData.get("id"));
  const erwartet = process.env.RACE_LISTE_KEY;

  if (!erwartet || key !== erwartet) return;
  if (!Number.isInteger(id) || id < 1) return;

  const q = sql();
  await q`DELETE FROM race_anmeldungen WHERE id = ${id}`;
  revalidatePath("/race-anmeldungen");
}
