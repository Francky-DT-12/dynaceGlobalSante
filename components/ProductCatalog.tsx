"use client";

import { useState } from "react";
import { products, ProductCategory, Product } from "../lib/products";
import PickLink from "./PickLink";

const categories: { label: string; value: ProductCategory }[] = [
  { label: "Tous les produits", value: "all" },
  { label: "Biothérapie & Cellules", value: "biotherapy" },
  { label: "Cafés Bien-être", value: "coffee" },
  { label: "Nutricosmétique & Soins", value: "care" },
];

export default function ProductCatalog() {
  const [activeCat, setActiveCat] = useState<ProductCategory>("all");

  const filteredProducts = activeCat === "all"
    ? products
    : products.filter((p) => p.filterCategory === activeCat);

  return (
    <section className="section-products" id="produits">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Catalogue Certifié</span>
          <h2 className="section-title">Les Formules Innovantes Dynace Global</h2>
          <p className="section-desc">
            Compléments nutritionnels d&apos;avant-garde, boissons fonctionnelles et soins cellulaires botaniques. Sélectionnez un produit pour initialiser votre commande instantanément.
          </p>

          {/* Filtres par Catégorie */}
          <div className="catalog-filters" role="tablist" aria-label="Catégories de produits">
            {categories.map((cat) => {
              const isActive = activeCat === cat.value;
              const count = cat.value === "all"
                ? products.length
                : products.filter((p) => p.filterCategory === cat.value).length;

              return (
                <button
                  key={cat.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCat(cat.value)}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des Produits */}
        <div className="products-grid">
          {filteredProducts.map((p: Product) => (
            <article className="product-card" key={p.name}>
              <div className="product-card-top">
                <span className="product-category">{p.category}</span>
                <span className="product-highlight">{p.highlight}</span>
              </div>

              {/* Cadre Bulle Produit avec Reflet */}
              <div className="product-bubble-frame">
                <div className="product-bubble-aura" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={p.cover ? "cover" : undefined}
                  src={`/img/${p.image}.webp`}
                  alt={p.name}
                  loading="lazy"
                />
              </div>

              <div className="product-info">
                <div className="product-rating-row">
                  {/* <div className="stars-group" aria-label={`Note: ${p.rating} sur 5`}>
                    {"★★★★★"}
                  </div>
                  <span className="rating-value">{p.rating}</span>
                  <span className="reviews-count">({p.reviewsCount} avis)</span> */}
                </div>

                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>

                {/* Points forts clés */}
                <div className="product-benefits-list">
                  {p.benefits.map((b, idx) => (
                    <span className="benefit-tag" key={idx}>
                      <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="product-footer">
                <PickLink name={p.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
