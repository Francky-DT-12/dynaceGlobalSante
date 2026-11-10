"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "../lib/products";
import { SITE, waLink } from "../lib/config";

const quickCities = [
  "Yaoundé",
  "Douala",
  "Bafoussam",
  "Garoua",
  "Bamenda",
  "Kribi",
];

export default function OrderForm() {
  const [product, setProduct] = useState(products[0].name);
  const [qty, setQty] = useState(1);
  const [city, setCity] = useState(SITE.defaultCity);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const onPick = (e: Event) => {
      const selectedName = (e as CustomEvent<string>).detail;
      if (selectedName) {
        setProduct(selectedName);
      }
    };
    window.addEventListener("pick-product", onPick);
    return () => window.removeEventListener("pick-product", onPick);
  }, []);

  const currentProduct = useMemo(() => {
    return products.find((p) => p.name === product) || products[0];
  }, [product]);

  const message = useMemo(() => {
    const lines = [
      "Bonjour Dynace Cameroun,",
      "Je souhaite commander le produit suivant :",
      `• Produit : ${product}`,
      `• Quantité : ${Math.max(1, qty || 1)} boîte(s) / unité(s)`,
      `• Ville de livraison : ${city.trim() || SITE.defaultCity}`,
    ];
    if (name.trim()) {
      lines.push(`• Nom du client : ${name.trim()}`);
    }
    lines.push("");
    lines.push("Merci de me confirmer la disponibilité du stock, le montant en FCFA et les modalités d'expédition.");
    return lines.join("\n");
  }, [product, qty, city, name]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setNote("Message copié dans le presse-papier !");
      setTimeout(() => setNote(""), 3500);
    } catch {
      setNote("Veuillez sélectionner et copier manuellement le texte ci-dessus.");
    }
  }

  return (
    <form className="order-form-box" onSubmit={(e) => e.preventDefault()} noValidate>
      <div className="form-header-bar">
        <div className="form-header-badge">Studio de Commande</div>
        <h3 className="form-header-title">Finalisez votre demande en 1 clic</h3>
        <p className="form-header-sub">
          Sélectionnez vos options. Votre bon de commande sera pré-rempli pour WhatsApp.
        </p>
      </div>

      {/* Mini-carte produit sélectionné */}
      <div className="selected-product-card">
        <div className="selected-product-bubble">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/img/${currentProduct.image}.webp`}
            alt={currentProduct.name}
          />
        </div>
        <div className="selected-product-info">
          <span className="selected-product-tag">{currentProduct.category}</span>
          <h4 className="selected-product-name">{currentProduct.name}</h4>
          {/* <span className="selected-product-status">✓ En stock à {SITE.defaultCity}</span> */}
        </div>
      </div>

      {/* Choix du produit */}
      <div className="form-field">
        <label htmlFor="f-prod">Changer de produit Dynace :</label>
        <select
          id="f-prod"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="form-select"
        >
          {products.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name} — {p.category}
            </option>
          ))}
        </select>
      </div>

      {/* Quantité & Ville */}
      <div className="form-row-2">
        <div className="form-field">
          <label htmlFor="f-qty">Quantité souhaitée</label>
          <div className="qty-control">
            <button
              type="button"
              className="qty-btn minus"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Diminuer la quantité"
            >
              −
            </button>
            <input
              id="f-qty"
              type="number"
              min={1}
              max={99}
              inputMode="numeric"
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value, 10) || 1))}
            />
            <button
              type="button"
              className="qty-btn plus"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Augmenter la quantité"
            >
              +
            </button>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="f-city">Ville de livraison</label>
          <input
            id="f-city"
            type="text"
            placeholder="Ex. Yaoundé, Douala..."
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      {/* Raccourcis Villes */}
      <div className="city-chips-group">
        <span className="city-chips-label">Villes fréquentes :</span>
        <div className="city-chips">
          {quickCities.map((c) => (
            <button
              key={c}
              type="button"
              className={`city-chip ${city === c ? "active" : ""}`}
              onClick={() => setCity(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Nom facultatif */}
      <div className="form-field">
        <label htmlFor="f-name">Votre nom ou prénom (facultatif)</label>
        <input
          id="f-name"
          type="text"
          placeholder="Ex. Christian M."
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Aperçu Message Façon Bulle WhatsApp */}
      <div className="wa-bubble-preview-container">
        <div className="wa-bubble-topbar">
          <div className="wa-bubble-user">
            <span className="wa-bubble-avatar">D</span>
            <div className="wa-bubble-user-text">
              <span className="wa-bubble-name">Dynace Cameroun Support</span>
              <span className="wa-bubble-status">En ligne • Répond en quelques minutes</span>
            </div>
          </div>
        </div>

        <div className="wa-bubble-body">
          <div className="wa-chat-balloon" aria-live="polite">
            <div className="wa-balloon-content">{message}</div>
            <div className="wa-balloon-meta">
              <span>Maintenant</span>
              <span className="wa-double-check">✓✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="form-actions-row">
        <a
          className="btn btn-wa btn-lg btn-pulse"
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.72 7.73C8.44 8.04 7.64 8.8 7.64 10.35C7.64 11.9 8.77 13.39 8.93 13.6C9.09 13.81 11.14 17.15 14.37 18.41C16.62 19.29 17.38 19.04 17.9 18.99C18.63 18.92 19.73 18.3 19.98 17.58C20.24 16.86 20.24 16.24 20.16 16.12C20.08 16 19.88 15.92 19.57 15.77C19.26 15.61 17.76 14.88 17.48 14.78C17.2 14.67 17 14.62 16.8 14.93C16.59 15.24 16 15.97 15.82 16.17C15.65 16.38 15.47 16.4 15.16 16.25C14.86 16.09 13.88 15.77 12.71 14.73C11.8 13.92 11.19 12.92 11.03 12.65C10.88 12.38 11.01 12.24 11.17 12.08C11.31 11.95 11.48 11.72 11.63 11.54C11.79 11.36 11.84 11.23 11.94 11.03C12.05 10.82 12 10.64 11.92 10.49C11.84 10.33 11.23 8.85 10.97 8.23C10.72 7.64 10.47 7.72 10.28 7.71C10.1 7.7 9.89 7.7 9.69 7.7C9.48 7.7 9.17 7.78 8.91 8.06" />
          </svg>
          <span>Transmettre la commande sur WhatsApp</span>
        </a>
        <button className="btn btn-outline" type="button" onClick={copy}>
          Copier le texte
        </button>
      </div>

      {note && <p className="form-success-note" role="status">{note}</p>}

      {/* Badges de confiance paiement & livraison */}
      <div className="order-trust-strip">
        <div className="trust-pill">
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Paiement MoMo / Orange Money / Espèces</span>
        </div>
        <div className="trust-pill">
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Conseil posologie personnalisé offert</span>
        </div>
      </div>
    </form>
  );
}
