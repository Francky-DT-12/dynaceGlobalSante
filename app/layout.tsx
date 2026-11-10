import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dynace-cameroun.com"),
  title: "Dynace Cameroun | Produits Botaniques & Bien-être Livrés à Domicile",
  description: "Distributeur indépendant agréé des produits Dynace Global au Cameroun (Rocenta, Ace Brew Coffee, Collagène, Aceguard). Commande rapide sur WhatsApp & livraison express.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/img/logo.webp", type: "image/webp" }
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg"
  },
  keywords: [
    "Dynace Cameroun",
    "Dynace Global",
    "Dynace Rocenta Yaoundé",
    "Ace Brew Coffee Cameroun",
    "Collagène Dynace",
    "Aceguard Cameroun",
    "Vente directe Yaoundé",
    "Compléments alimentaires Cameroun"
  ],
  authors: [{ name: "Partenaire Indépendant Dynace Cameroun" }],
  openGraph: {
    title: "Dynace Cameroun | Boutique & Commande WhatsApp",
    description: "Commandez vos produits Dynace originaux en 1 clic sur WhatsApp. Livraison à Yaoundé et dans tout le Cameroun.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/img/rocenta.webp",
        width: 600,
        height: 600,
        alt: "Dynace Rocenta Cameroun"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1c3381"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Dynace Cameroun",
  description: "Distributeur indépendant agréé des produits botaniques et de biothérapie cellulaire Dynace Global au Cameroun (Dynace Rocenta, Ace Brew Coffee, Collagène, Aceguard).",
  url: "https://dynace-cameroun.com",
  telephone: "+237674664829",
  priceRange: "FCFA",
  image: "https://dynace-cameroun.com/img/rocenta.webp",
  logo: "https://dynace-cameroun.com/icon.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yaoundé",
    addressRegion: "Centre",
    addressCountry: "CM"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 3.848,
    longitude: 11.5021
  },
  areaServed: [
    { "@type": "Country", name: "Cameroun" },
    { "@type": "City", name: "Yaoundé" },
    { "@type": "City", name: "Douala" }
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels sont les tarifs des produits Dynace au Cameroun ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les tarifs sont fixés en FCFA selon les gammes officielles Dynace Global. Vous pouvez sélectionner un produit dans le formulaire ou nous contacter sur WhatsApp pour obtenir le tarif précis du jour, les offres groupées et les disponibilités en stock."
      }
    },
    {
      "@type": "Question",
      name: "Quels sont les moyens de paiement acceptés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour votre confort et sécurité maximale, nous acceptons Orange Money, MTN MoMo, virement bancaire local, ainsi que le règlement en espèces à la livraison pour les remises en main propre à Yaoundé."
      }
    },
    {
      "@type": "Question",
      name: "Assurez-vous la livraison dans toutes les villes du Cameroun ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Nous organisons des envois quotidiens sécurisés vers Douala, Bafoussam, Garoua, Bamenda, Bertoua, Kribi, Ngaoundéré et l'ensemble du territoire national via les agences de messagerie de confiance."
      }
    },
    {
      "@type": "Question",
      name: "Quelle est la posologie recommandée pour Dynace Rocenta ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dynace Rocenta se prend généralement le matin à jeun, en versant le contenu d'un sachet directement sous la langue (voie sublinguale) pour une assimilation cellulaire optimale. Un protocole complet et personnalisé vous est remis dès validation de votre commande."
      }
    },
    {
      "@type": "Question",
      name: "Quelle est la nature médicale de ces compléments ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les produits Dynace Global sont des compléments alimentaires botaniques de haute technicité issus de la recherche en biothérapie végétale. Ils soutiennent l'équilibre et la vitalité naturelle du corps, mais ne se substituent pas à une prescription médicale ni à l'avis d'un professionnel de santé."
      }
    },
    {
      "@type": "Question",
      name: "Quelle est la relation de ce site avec Dynace Global ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ce portail est administré par un distributeur et partenaire d'affaires agréé indépendant de Dynace Global au Cameroun. Il garantit la traçabilité des produits originaux et assure le conseil de proximité."
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
