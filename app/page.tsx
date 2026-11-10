import Header from "../components/Header";
import ProductCatalog from "../components/ProductCatalog";
import OrderForm from "../components/OrderForm";
import CopyPhone from "../components/CopyPhone";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PickLink from "../components/PickLink";
import { SITE, waLink } from "../lib/config";

const testimonials = [
  {
    name: "Dr. Emmanuel N.",
    city: "Douala (Bonapriso)",
    role: "Professionnel de santé",
    text: "J'ai testé Dynace Rocenta sur recommandation. Les résultats sur le tonus général et la récupération cellulaire sont remarquables. Service de livraison soigné en moins de 24h à Douala.",
    rating: 5,
    product: "Dynace Rocenta",
  },
  {
    name: "Chantal M.",
    city: "Yaoundé (Bastos)",
    role: "Entrepreneure",
    text: "Le café Ace Brew sans sucre raffiné est devenu incontournable dans mes matinées. Aucun pic de glycémie, une énergie constante et un goût très doux grâce au fruit du moine.",
    rating: 5,
    product: "Ace Brew Coffee",
  },
  {
    name: "Alain Patrick T.",
    city: "Bafoussam",
    role: "Commerçant",
    text: "Commande passée directement via WhatsApp. Le colis m'a été expédié par agence de voyage sécurisée dès le lendemain. Produits 100% originaux avec scellé d'origine.",
    rating: 5,
    product: "Triple Root Coffee",
  },
];

const faq = [
  {
    q: "Quels sont les tarifs des produits Dynace au Cameroun ?",
    a: "Les tarifs sont fixés en FCFA selon les gammes officielles Dynace Global. Vous pouvez sélectionner un produit dans le formulaire ci-dessous ou nous contacter sur WhatsApp pour obtenir le tarif précis du jour, les offres groupées et les disponibilités en stock.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Pour votre confort et sécurité maximale, nous acceptons Orange Money, MTN MoMo, virement bancaire local, ainsi que le règlement en espèces à la livraison pour les remises en main propre à Yaoundé.",
  },
  {
    q: "Assurez-vous la livraison dans toutes les villes du Cameroun ?",
    a: "Absolument. Nous organisons des envois quotidiens sécurisés vers Douala, Bafoussam, Garoua, Bamenda, Bertoua, Kribi, Ngaoundéré et l'ensemble du territoire national via les agences de messagerie de confiance.",
  },
  {
    q: "Quelle est la posologie recommandée pour Dynace Rocenta ?",
    a: "Dynace Rocenta se prend généralement le matin à jeun, en versant le contenu d'un sachet directement sous la langue (voie sublinguale) pour une assimilation cellulaire optimale. Un protocole complet et personnalisé vous est remis dès validation de votre commande.",
  },
  {
    q: "Quelle est la nature médicale de ces compléments ?",
    a: "Les produits Dynace Global sont des compléments alimentaires botaniques de haute technicité issus de la recherche en biothérapie végétale. Ils soutiennent l'équilibre et la vitalité naturelle du corps, mais ne se substituent pas à une prescription médicale ni à l'avis d'un professionnel de santé.",
  },
  {
    q: "Quelle est la relation de ce site avec Dynace Global ?",
    a: "Ce portail est administré par un distributeur et partenaire d'affaires agréé indépendant de Dynace Global au Cameroun. Il garantit la traçabilité des produits originaux et assure le conseil de proximité.",
  },
];

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Header Sticky & Navigation Interactive */}
      <Header />

      <main id="accueil">
        {/* ==========================================================================
            HERO SECTION HAUTE PERFORMANCE
            ========================================================================== */}
        <section className="hero-section">
          <div className="hero-backdrop-glow" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-pulse" />
                <span>Biothérapie Cellulaire & Santé Botanique</span>
              </div>

              <h1 className="hero-title">
                L&apos;excellence des solutions <span>Dynace Global</span> au Cameroun.
              </h1>

              <p className="hero-desc">
                Des formulations avancées à base de cellules souches végétales, antioxydants puissants et nutriments botaniques. Bénéficiez d&apos;un conseil expert direct et d&apos;un approvisionnement sécurisé à Yaoundé et dans tout le pays.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#commander">
                  <span>Commander un produit</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a className="btn btn-outline btn-lg" href="#produits">
                  Découvrir le catalogue
                </a>
              </div>

              {/* Badges de Confiance Héro */}
              <div className="hero-features">
                <div className="hero-feature-item">
                  <div className="feature-icon-bullet">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>100% Produits Originaux</strong>
                    <span>Scellés certifiés d&apos;origine</span>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <div className="feature-icon-bullet">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>Stock Actif Yaoundé</strong>
                    <span>Retrait ou livraison le jour même</span>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <div className="feature-icon-bullet">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong>Envois Régionaux Sécurisés</strong>
                    <span>Douala, Bafoussam, Garoua...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vitrine Héro avec Bulle Flottante Haute Précision */}
            <div className="hero-visual-card">
              <div className="hero-visual-glow" />
              <div className="hero-badge-tag">
                <span>⭐ Produit de Référence</span>
              </div>
              <div className="hero-bubble">
                <div className="hero-bubble-ring" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/rocenta.webp"
                  alt="Dynace Rocenta Boisson Botanique"
                  width={240}
                  height={240}
                />
              </div>
              <h2 className="hero-product-name">Dynace Rocenta</h2>
              <p className="hero-product-sub">Cellules souches végétales & rose bulgare</p>
              <div className="hero-product-meta">
                <span className="hero-meta-pill">Régénération Cellulaire</span>
                <span className="hero-meta-pill">Anti-Âge Puissant</span>
              </div>
              <div className="hero-card-cta">
                <PickLink name="Dynace Rocenta" />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION PILIERS & QUALITÉ SCIENTIFIQUE
            ========================================================================== */}
        <section className="section-piliers" id="biotherapie">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Garantie & Rigueur</span>
              <h2 className="section-title">Pourquoi Choisir Dynace Global ?</h2>
              <p className="section-desc">
                Une approche rigoureuse alliant bio-ingénierie végétale, traçabilité pharmaceutique et disponibilité locale immédiate.
              </p>
            </div>

            <div className="piliers-grid">
              {/* Pilier 1 */}
              <div className="pilier-card">
                <div className="pilier-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>Biothérapie & Cellules Souches</h3>
                <p>
                  Formulations brevetées intégrant des cellules souches botaniques et de super-antioxydants pour stimuler la vitalité cellulaire profonde.
                </p>
                <div className="pilier-badge">Technologie Végétale Avancée</div>
              </div>

              {/* Pilier 2 */}
              <div className="pilier-card">
                <div className="pilier-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Normes & Certifications BPF</h3>
                <p>
                  Conformité totale avec les standards internationaux de Bonnes Pratiques de Fabrication (BPF / GMP), garantissant pureté et traçabilité.
                </p>
                <div className="pilier-badge">Certifié Qualité Internationale</div>
              </div>

              {/* Pilier 3 */}
              <div className="pilier-card">
                <div className="pilier-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3>Stock Central à Yaoundé</h3>
                <p>
                  Stocks réels disponibles sur place à Yaoundé. Aucune attente d&apos;importation : retrait immédiat ou livraison sous 24h à 48h sur tout le Cameroun.
                </p>
                <div className="pilier-badge">Approvisionnement Rapide</div>
              </div>

              {/* Pilier 4 */}
              <div className="pilier-card">
                <div className="pilier-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Conseil & Suivi Posologique</h3>
                <p>
                  Votre conseiller attitré reste à votre écoute pour vous guider pas à pas dans l&apos;utilisation, la posologie et le suivi de vos cures de vitalité.
                </p>
                <div className="pilier-badge">Accompagnement 7j/7</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            ZOOM PRODUIT PHARE : DYNACE ROCENTA SPOTLIGHT
            ========================================================================== */}
        <section className="section-rocenta-spotlight" id="rocenta-focus">
          <div className="container">
            <div className="rocenta-spotlight-card">
              <div className="rocenta-spotlight-left">
                <span className="spotlight-tag">Innovation Majeure</span>
                <h2 className="spotlight-title">
                  Zoom sur <span>Dynace Rocenta</span> : La Révolution des Cellules Souches
                </h2>
                <p className="spotlight-desc">
                  Dynace Rocenta est une synergie exclusive associant les cellules souches végétales, la précieuse rose bulgare (Rosa Damascena) et les micro-algues bleu-vert d&apos;eau douce. Une assimilation sublinguale directe pour une biodisponibilité maximale.
                </p>

                <div className="spotlight-actives-grid">
                  <div className="active-item">
                    <span className="active-dot" />
                    <div>
                      <strong>PhytoCellTec™ Malus Domestica</strong>
                      <span>Cellules souches de pomme suisse favorisant la longévité cellulaire</span>
                    </div>
                  </div>

                  <div className="active-item">
                    <span className="active-dot" />
                    <div>
                      <strong>Rose Bulgare Damascena</strong>
                      <span>Puissant bouclier antioxydant et tonique circulatoire naturel</span>
                    </div>
                  </div>

                  <div className="active-item">
                    <span className="active-dot" />
                    <div>
                      <strong>Micro-Algues Aphanizomenon (AFA)</strong>
                      <span>Riches en phycocyanine pour soutenir les défenses immunitaires</span>
                    </div>
                  </div>

                  <div className="active-item">
                    <span className="active-dot" />
                    <div>
                      <strong>Ashwagandha & Grenade</strong>
                      <span>Adaptogènes reconnus contre la fatigue nerveuse et le stress cellulaire</span>
                    </div>
                  </div>
                </div>

                <div className="spotlight-actions">
                  <a
                    className="btn btn-primary"
                    href={waLink("Bonjour, je souhaite commander Dynace Rocenta et connaître la posologie adaptée.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commander Dynace Rocenta
                  </a>
                  <a className="btn btn-outline" href="#produits">
                    Voir les autres gammes
                  </a>
                </div>
              </div>

              <div className="rocenta-spotlight-right">
                <div className="spotlight-visual-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/rocenta.webp"
                    alt="Dynace Rocenta Boîte Officielle"
                    width={320}
                    height={320}
                  />
                  <div className="spotlight-badge-floating">
                    <span className="badge-star">★ 4.5 / 5</span>
                    <span className="badge-text">Recommandé par nos clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            CATALOGUE INTERACTIF AVEC FILTRES PAR CATÉGORIE
            ========================================================================== */}
        <ProductCatalog />

        {/* ==========================================================================
            SECTION TÉMOIGNAGES CLIENTS & PREUVE SOCIALE CAMEROUN
            ========================================================================== */}
        <section className="section-testimonials" id="temoignages">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Retours d&apos;Expérience</span>
              <h2 className="section-title">Ce que disent nos clients au Cameroun</h2>
              <p className="section-desc">
                Des centaines de familles, professionnels et sportifs au Cameroun font confiance à nos produits et à notre réactivité de livraison.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <div className="testimonial-card" key={idx}>
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {t.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="testimonial-author-info">
                      <div className="testimonial-name-row">
                        <h4>{t.name}</h4>
                        {/* <span className="verified-badge">✓ Vérifié</span> */}
                      </div>
                      <span className="testimonial-location">{t.city} · {t.role}</span>
                    </div>
                  </div>

                  <div className="testimonial-stars" aria-label="5 étoiles sur 5">
                    {"★★★★★"}
                  </div>

                  <blockquote className="testimonial-text">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  <div className="testimonial-footer">
                    <span className="testimonial-product-tag">Produit : {t.product}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chiffres Clés de Confiance */}
            <div className="stats-strip">
              <div className="stat-card">
                <span className="stat-number">1 800+</span>
                <span className="stat-label">Clients livrés au Cameroun</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24h / 48h</span>
                <span className="stat-label">Délai moyen d&apos;expédition</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Produits originaux certifiés</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.5 / 5</span>
                <span className="stat-label">Satisfaction client moyenne</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION OPPORTUNITÉ D'AFFAIRES (RÉSEAU DYNACE GLOBAL)
            ========================================================================== */}
        <section className="section-opportunite" id="opportunite">
          <div className="container opportunite-grid">
            <div className="opportunite-content">
              <span className="opportunite-tag">Développement & Entrepreneuriat</span>
              <h2 className="opportunite-title">
                Bâtissez votre Activité Indépendante avec <span>Dynace Global</span>
              </h2>
              <p className="opportunite-desc">
                Le secteur de la santé cellulaire et du bien-être botanique connaît un essor sans précédent en Afrique centrale. Intégrez notre équipe de leaders au Cameroun et accédez à une plateforme internationale éprouvée pour générer des revenus pérennes.
              </p>

              <div className="opportunite-points">
                <div className="opp-point-item">
                  <div className="opp-point-icon">✓</div>
                  <div>
                    <strong>Plan de Rémunération Attractif</strong>
                    <p>Commissions sur ventes directes, bonus de binaire équilibré et primes de leadership versées chaque semaine.</p>
                  </div>
                </div>
                <div className="opp-point-item">
                  <div className="opp-point-icon">✓</div>
                  <div>
                    <strong>Académie de Formation Gratuite</strong>
                    <p>Modules de formation hebdomadaires à Yaoundé et sessions Zoom sur les produits, le closing et le marketing relationnel.</p>
                  </div>
                </div>
                <div className="opp-point-item">
                  <div className="opp-point-icon">✓</div>
                  <div>
                    <strong>Accompagnement Terrain & Supports Officiels</strong>
                    <p>Brochures physiques, visuels certifiés et appui personnalisé d&apos;un parrain dédié pour accélérer votre démarrage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="opportunite-cta-card">
              <div className="cta-card-badge">Partenariat 2026</div>
              <h3>Devenir Distributeur Dynace</h3>
              <p>
                Recevez le plan de compensation détaillé et la grille des packs d&apos;adhésion au Cameroun sans aucun engagement.
              </p>
              <a
                className="btn btn-primary btn-lg"
                href={waLink("Bonjour, je souhaite recevoir les informations officielles pour devenir partenaire distributeur Dynace Global au Cameroun.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demander la documentation
              </a>
              <span className="opp-card-note">
                🔒 Échange direct et confidentiel avec le responsable réseau
              </span>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            TUNNEL DE COMMANDE & STUDIO WHATSAPP
            ========================================================================== */}
        <section className="section-order" id="commander">
          <div className="container order-layout">
            <div className="order-intro">
              <span className="section-tag">Commande Express & Directe</span>
              <h2 className="section-title">Commandez vos produits en toute simplicité</h2>
              <p className="section-desc">
                Indiquez les détails de votre commande ci-contre pour générer votre message sécurisé. Vous serez immédiatement pris en charge par notre conseiller sur WhatsApp pour organiser la livraison.
              </p>

              <div className="order-guarantee-list">
                <div className="guarantee-item">
                  <div className="guarantee-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h4>Zéro Paiement Bancaire en Ligne</h4>
                    <p>Vos coordonnées bancaires ne sont jamais demandées sur ce site. Vos paiements s&apos;effectuent en direct via Mobile Money ou à la livraison.</p>
                  </div>
                </div>

                <div className="guarantee-item">
                  <div className="guarantee-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4>Réactivité Immédiate</h4>
                    <p>Confirmation du stock, du montant exact en FCFA et de l&apos;heure d&apos;expédition en moins de 15 minutes.</p>
                  </div>
                </div>

                <div className="guarantee-item">
                  <div className="guarantee-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h4>Protocole d&apos;Usage Offert</h4>
                    <p>Recevez gratuitement la fiche de posologie adaptée à votre profil santé lors de la remise de votre commande.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire Intelligent */}
            <OrderForm />
          </div>
        </section>

        {/* ==========================================================================
            SECTION FAQ SOBRE & CLAIRE
            ========================================================================== */}
        <section className="section-faq" id="faq">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Renseignements & Transparence</span>
              <h2 className="section-title">Questions Fréquemment Posées</h2>
              <p className="section-desc">
                Retrouvez toutes les réponses essentielles concernant nos formules, nos livraisons et notre garantie d&apos;origine.
              </p>
            </div>

            <div className="faq-list">
              {faq.map((f, idx) => (
                <details className="faq-entry" key={idx}>
                  <summary className="faq-question">
                    <span>{f.q}</span>
                    <svg className="faq-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            BANDEAU DE CONTACT DIRECT & COORDONNÉES
            ========================================================================== */}
        <section className="section-contact-bar">
          <div className="container">
            <div className="contact-card-inner">
              <div className="contact-left">
                <span className="contact-sub-badge">Assistance Directe Yaoundé</span>
                <h3>Une question ou une commande urgente ?</h3>
                <p>Notre conseiller vous répond 7j/7 pour vous orienter et planifier votre livraison.</p>
              </div>

              <div className="contact-right">
                <span className="contact-phone-display">{SITE.phoneDisplay}</span>
                <a
                  className="btn btn-wa"
                  href={waLink("Bonjour, je vous contacte depuis votre site internet pour des conseils sur la gamme Dynace.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.72 7.73C8.44 8.04 7.64 8.8 7.64 10.35C7.64 11.9 8.77 13.39 8.93 13.6C9.09 13.81 11.14 17.15 14.37 18.41C16.62 19.29 17.38 19.04 17.9 18.99C18.63 18.92 19.73 18.3 19.98 17.58C20.24 16.86 20.24 16.24 20.16 16.12C20.08 16 19.88 15.92 19.57 15.77C19.26 15.61 17.76 14.88 17.48 14.78C17.2 14.67 17 14.62 16.8 14.93C16.59 15.24 16 15.97 15.82 16.17C15.65 16.38 15.47 16.4 15.16 16.25C14.86 16.09 13.88 15.77 12.71 14.73C11.8 13.92 11.19 12.92 11.03 12.65C10.88 12.38 11.01 12.24 11.17 12.08C11.31 11.95 11.48 11.72 11.63 11.54C11.79 11.36 11.84 11.23 11.94 11.03C12.05 10.82 12 10.64 11.92 10.49C11.84 10.33 11.23 8.85 10.97 8.23C10.72 7.64 10.47 7.72 10.28 7.71C10.1 7.7 9.89 7.7 9.69 7.7C9.48 7.7 9.17 7.78 8.91 8.06" />
                  </svg>
                  <span>Écrire sur WhatsApp</span>
                </a>
                <CopyPhone />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
          FOOTER INSTITUTIONNEL CONFORME
          ========================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logo.webp" alt="Dynace Global" width={120} height={38} />
              <div className="footer-brand-text">
                <span className="footer-brand-title">Dynace Cameroun</span>
                <span className="footer-brand-subtitle">Distribution Indépendante Agréée</span>
              </div>
            </div>

            <div className="footer-nav">
              <a href="#produits">Gamme Produits</a>
              <a href="#rocenta-focus">Dynace Rocenta</a>
              <a href="#biotherapie">Sciences & Qualité</a>
              <a href="#temoignages">Avis</a>
              <a href="#opportunite">Affiliation</a>
              <a href="#commander">Commander</a>
            </div>

            <div className="footer-city-tag">
              <span>Yaoundé, Région du Centre, Cameroun</span>
            </div>
          </div>

          <div className="footer-disclaimers">
            <p>
              <strong>Statut de Partenaire Indépendant :</strong> Ce portail est exploité de manière autonome par un distributeur et affilié agréé de Dynace Global au Cameroun. Les marques, dénominations commerciales et logos sont la propriété exclusive de Dynace Global.
            </p>
            <p>
              <strong>Avertissement Réglementaire Santé :</strong> Les produits présentés sont des compléments alimentaires botaniques et des préparations de bien-être cellulaire. Ils ne sont en aucun cas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie. Consultez un professionnel de la santé pour toute question médicale.
            </p>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Dynace Cameroun — Partenaire Indépendant Agréé. Tous droits réservés.</span>
            {/* <div className="footer-payments-info">
              <span>Paiements acceptés : Orange Money · MTN MoMo · Espèces à la livraison</span>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp Flottant Interactif */}
      <FloatingWhatsApp />
    </div>
  );
}
