export type ProductCategory = "all" | "biotherapy" | "coffee" | "care";

export type Product = {
  name: string;
  image: string;
  description: string;
  price: string;
  cover?: boolean;
  category: string;
  filterCategory: ProductCategory;
  highlight: string;

  reviewsCount: number;
  benefits: string[];
};

export const products: Product[] = [
  {
    name: "Dynace Rocenta",
    image: "rocenta",
    description: "Formule phare de biothérapie cellulaire botanique à base de cellules souches végétales, rose bulgare et algues brunes.",
    price: "36 000 FCFA ",
    category: "Biothérapie Cellulaire",
    filterCategory: "biotherapy",
    highlight: "N°1 Best-Seller",
   
    reviewsCount: 142,
    benefits: ["Cellules souches végétales", "Régénération & Vitalité", "Rose Bulgare pure"]
  },
  {
    name: "Ace Brew Coffee",
    image: "acebrew",
    description: "Café bien-être enrichi en NMN et Gymnema Sylvestre, édulcoré naturellement au fruit du moine, sans sucre raffiné.",
    price: "36 000 FCFA ",
    category: "Nutrition & Métabolisme",
    filterCategory: "coffee",
    highlight: "Sans Sucre Raffiné",
   
    reviewsCount: 89,
    benefits: ["Enrichi en NMN & Gymnema", "Fruit du Moine naturel", "Énergie métabolique"]
  },
  {
    name: "Triple Root Coffee",
    image: "tripleroot",
    description: "Café 100 % Arabica de qualité supérieure combiné à des extraits de racines traditionnelles pour la vitalité et l'endurance.",
    price: "36 000 FCFA ",
    category: "Vitalité & Tonus",
    filterCategory: "coffee",
    highlight: "100% Arabica",
   
    reviewsCount: 116,
    benefits: ["Arabica de haute qualité", "Extraits de racines actives", "Endurance & Focus"]
  },
  {
    name: "Dynace Collagène",
    image: "collagene",
    description: "Complexe régénérateur de collagène marin et antioxydants en sachets, conçu pour la fermeté cutanée et le confort articulaire.",
    price: "36 000 FCFA ",
    cover: true,
    category: "Nutricosmétique",
    filterCategory: "care",
    highlight: "Peau & Articulations",
   
    reviewsCount: 94,
    benefits: ["Collagène marin hydrolysé", "Élasticité cutanée", "Confort articulaire"]
  },
  {
    name: "Aceguard",
    image: "aceguard",
    description: "Bouclier immunitaire à base d'extrait de sureau noir, vitamine C pure, bêta-glucane d'algues et champignon Lait de Tigre.",
    price: "36 000 FCFA ",
    cover: true,
    category: "Défense Immunitaire",
    filterCategory: "biotherapy",
    highlight: "Soutien Immunitaire",
    
    reviewsCount: 68,
    benefits: ["Sureau noir & Vitamine C", "Champignon Lait de Tigre", "Bêta-glucanes protecteurs"]
  },
  {
    name: "Urbanism : Sunz & Moonz",
    image: "urbanism",
    description: "Programme nutritionnel équilibrant jour et nuit : Sunz pour le soutien métabolique actif, Moonz pour la détoxification nocturne.",
    price: "36 000 FCFA ",
    cover: true,
    category: "Équilibre & Silhouette",
    filterCategory: "care",
    highlight: "Protocole 24H",
   
    reviewsCount: 53,
    benefits: ["Double action Jour & Nuit", "Détoxification naturelle", "Équilibre métabolique"]
  },
  {
    name: "Dentifrice Botanique Dynace",
    image: "dentifrice",
    description: "Soin dentaire aux extraits végétaux de thé blanc, jasmin et menthe poivrée, respectueux de l'émail et des gencives sensibles.",
    price: "15 000 FCFA ",
    cover: true,
    category: "Hygiène & Soin",
    filterCategory: "care",
    highlight: "Plantes Médicinales",
    
    reviewsCount: 71,
    benefits: ["Thé blanc & Jasmin", "Haleine fraîche durable", "Respecte l'émail"]
  },
  {
    name: "Boisson Botanique Pomme",
    image: "pomme",
    description: "Boisson fonctionnelle en poudre saveur pomme verte, riche en phytonutriments et antioxydants pour l'hydratation quotidienne.",
    price: "36 000 FCFA ",
    category: "Hydratation Active",
    filterCategory: "care",
    highlight: "Antioxydants Purs",
    
    reviewsCount: 47,
    benefits: ["Phytonutriments actifs", "Pomme verte rafraîchissante", "Hydratation cellulaire"]
  },
];
