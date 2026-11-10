"use client";

import { useState, useEffect } from "react";
import { SITE, waLink } from "../lib/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Topbar Institutionnelle */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            {/* <span className="topbar-badge">
              <span className="live-dot" /> Partenaire Agréé
            </span>
            <span className="topbar-subtitle">
              Distributeur Officiel Dynace Global · {SITE.defaultCity}, Cameroun
            </span> */}
          </div>
          <div className="topbar-right">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="topbar-link"
              title="Appeler notre conseiller"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span>{SITE.phoneDisplay}</span>
            </a>
            <span className="topbar-divider">|</span>
            <a
              href={waLink("Bonjour, je souhaite un renseignement sur vos produits Dynace.")}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-wa-link"
            >
              Conseil WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Header Sticky avec Glassmorphism */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="logo-link" href="#accueil" aria-label="Dynace Cameroun Accueil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-img" src="/img/logo.webp" alt="Dynace Global" width={130} height={40} />
            <div className="logo-label">
              <span className="logo-title">Dynace Cameroun</span>
              <span className="logo-subtitle">Partenaire Indépendant</span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="main-nav" aria-label="Navigation principale">
            <a href="#produits">Catalogue</a>
            <a href="#rocenta-focus">Dynace Rocenta</a>
            <a href="#biotherapie">Sciences & Qualité</a>
            <a href="#temoignages">Avis Clients</a>
            <a href="#opportunite">Opportunité Réseau</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* Actions Desktop */}
          <div className="header-actions">
            <a className="btn btn-primary btn-sm header-cta" href="#commander">
              <span>Commander</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Hamburger Button Mobile */}
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "active" : ""}`}>
          <div className="container mobile-nav-inner">
            <nav className="mobile-links" aria-label="Menu Mobile">
              <a href="#produits" onClick={closeMobileMenu}>
                <span>Catalogue Produits</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <a href="#rocenta-focus" onClick={closeMobileMenu}>
                <span>Focus Dynace Rocenta</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <a href="#biotherapie" onClick={closeMobileMenu}>
                <span>Sciences & Qualité</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <a href="#temoignages" onClick={closeMobileMenu}>
                {/* <span>Avis Clients Vérifiés</span> */}
                <span className="mobile-link-arrow">→</span>
              </a>
              <a href="#opportunite" onClick={closeMobileMenu}>
                <span>Opportunité Réseau</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <a href="#faq" onClick={closeMobileMenu}>
                <span>Foire Aux Questions</span>
                <span className="mobile-link-arrow">→</span>
              </a>
            </nav>

            <div className="mobile-cta-group">
              <a
                className="btn btn-primary"
                href="#commander"
                onClick={closeMobileMenu}
                style={{ width: "100%" }}
              >
                Passer commande sur WhatsApp
              </a>
              <a
                className="btn btn-wa"
                href={waLink("Bonjour, j'aimerais échanger avec un conseiller Dynace Cameroun.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                style={{ width: "100%" }}
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
