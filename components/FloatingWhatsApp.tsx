"use client";

import { useState } from "react";
import { SITE, waLink } from "../lib/config";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const defaultMsg = "Bonjour, je souhaite des informations sur les produits Dynace Global au Cameroun.";

  return (
    <aside className="wa-floating-wrapper" aria-label="Assistance WhatsApp">
      {showTooltip && (
        <div className="wa-floating-tooltip">
          <button
            type="button"
            className="wa-tooltip-close"
            onClick={() => setShowTooltip(false)}
            aria-label="Fermer l'infobulle"
          >
            ×
          </button>
          <div className="wa-tooltip-header">
            <span className="wa-status-dot" />
            <strong>Conseiller Dynace en ligne</strong>
          </div>
          <p className="wa-tooltip-text">
            Besoin d&apos;aide pour choisir votre produit ? Discutons sur WhatsApp !
          </p>
        </div>
      )}

      <a
        href={waLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        title="Discuter directement sur WhatsApp"
        aria-label="Contacter le conseiller sur WhatsApp"
      >
        <span className="wa-pulse-ring" />
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.72 7.73C8.44 8.04 7.64 8.8 7.64 10.35C7.64 11.9 8.77 13.39 8.93 13.6C9.09 13.81 11.14 17.15 14.37 18.41C16.62 19.29 17.38 19.04 17.9 18.99C18.63 18.92 19.73 18.3 19.98 17.58C20.24 16.86 20.24 16.24 20.16 16.12C20.08 16 19.88 15.92 19.57 15.77C19.26 15.61 17.76 14.88 17.48 14.78C17.2 14.67 17 14.62 16.8 14.93C16.59 15.24 16 15.97 15.82 16.17C15.65 16.38 15.47 16.4 15.16 16.25C14.86 16.09 13.88 15.77 12.71 14.73C11.8 13.92 11.19 12.92 11.03 12.65C10.88 12.38 11.01 12.24 11.17 12.08C11.31 11.95 11.48 11.72 11.63 11.54C11.79 11.36 11.84 11.23 11.94 11.03C12.05 10.82 12 10.64 11.92 10.49C11.84 10.33 11.23 8.85 10.97 8.23C10.72 7.64 10.47 7.72 10.28 7.71C10.1 7.7 9.89 7.7 9.69 7.7C9.48 7.7 9.17 7.78 8.91 8.06" />
        </svg>
      </a>
    </aside>
  );
}
