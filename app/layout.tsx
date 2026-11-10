import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dynace-cameroun.com"),
  title: "Dynace Cameroun | Produits Botaniques & Bien-être Livrés à Domicile",
  description: "Distributeur indépendant agréé des produits Dynace Global au Cameroun (Rocenta, Ace Brew Coffee, Collagène, Aceguard). Commande rapide sur WhatsApp & livraison express.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
