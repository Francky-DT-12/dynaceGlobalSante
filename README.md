# Dynace Cameroun Partenaire

Site vitrine Next.js (App Router) + TypeScript pour la vente des produits Dynace. La commande se prépare sur le site et s'envoie par WhatsApp.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # version de production
npm start
```

Prérequis : Node.js 18.18 ou plus récent.

## Ce que vous modifiez

- `lib/config.ts` : numéro WhatsApp / téléphone et ville par défaut.
- `lib/products.ts` : noms, descriptions et prix. Remplacez "Prix sur demande" par exemple par "15 000 FCFA".
- `public/img/` : photos des produits et logo (format .webp). Pour un nouveau produit, ajoutez la photo puis une ligne dans `products.ts`.
- `app/page.tsx` : textes des sections, FAQ, étapes.
- `app/globals.css` : couleurs (bleu #1C3381 et #019AD9) et polices. Le mode sombre suit le réglage du téléphone.

## Publier

Le plus simple est Vercel : envoyez le dossier sur GitHub, puis importez le dépôt sur vercel.com. Aucune configuration nécessaire.

## Mentions

Le site se présente comme partenaire indépendant de Dynace Global et ne contient aucune promesse de santé ni de revenus. Gardez ces mentions.
