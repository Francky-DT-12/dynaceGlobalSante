"use client";

import { useState } from "react";
import { SITE } from "../lib/config";

export default function CopyPhone() {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(`+${SITE.phoneIntl}`);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    } catch {
      /* Le numéro reste affiché manuellement */
    }
  }

  return (
    <button
      className="btn btn-outline"
      type="button"
      onClick={copy}
      aria-label="Copier le numéro de téléphone"
      style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 2H9a3 3 0 01-3-2z" />
      </svg>
      <span>{done ? "Numéro copié" : "Copier le numéro"}</span>
    </button>
  );
}
