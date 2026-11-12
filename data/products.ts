// ===== EDIT HERE: contact + products =====
export const WHATSAPP = "212663506144";
export const PHONE_DISPLAY = "0663506144";
export const INSTAGRAM = "https://instagram.com/"; // TODO: put your Instagram link
export const WEIGHTS = [250, 500, 1000] as const;
export type Weight = (typeof WEIGHTS)[number];
export type Product = {
  id: string; image: string;
  name: { ar: string; fr: string }; desc: { ar: string; fr: string };
  // Price in MAD per weight. 0 = "price on request" (set your real prices!)
  prices: Record<Weight, number>;
};
// Sample blends: replace names, descriptions, images and prices with your own.
export const products: Product[] = [
  {
    id: "arabica-honduras",
  image: "/images/arabica_honduras.jpg",
    name: {
      ar: "أرابيكا هندوراس",
      fr: "Arabica Honduras"
    },
    desc: {
      ar: "قهوة أرابيكا مختارة من هندوراس، بنكهة متوازنة ورائحة غنية.",
      fr: "Café Arabica du Honduras, aux arômes riches et équilibrés."
    },
    prices: { 250: 0, 500: 0, 1000: 0 }
  },
  {
    id: "robusta-uganda",
  image: "/images/robusta_uganda.jpg",
    name: {
      ar: "روبوستا أوغندا",
      fr: "Robusta Ouganda"
    },
    desc: {
      ar: "قهوة قوية وغنية بالقوام، لعشاق المذاق المركز.",
      fr: "Un café corsé et intense, pour les amateurs de caractère."
    },
    prices: { 250: 0, 500: 0, 1000: 0 }
  },
  {
    id: "robusta-vietnam",
  image: "/images/robusta_vietnam.jpg",
    name: {
      ar: "روبوستا فيتنام",
      fr: "Robusta Vietnam"
    },
    desc: {
      ar: "قهوة روبوستا بمذاق قوي وغني، مناسبة للقهوة اليومية.",
      fr: "Un Robusta puissant et généreux, idéal au quotidien."
    },
    prices: { 250: 0, 500: 0, 1000: 0 }
  },
  {
    id: "nota-blend",
    image: "/images/nota_blend.jpg",
    name: {
      ar: "خليط NOTA",
      fr: "Mélange NOTA"
    },
    desc: {
      ar: "خلطة خاصة من NOTA COFFEE بمذاق متوازن وشخصية مميزة.",
      fr: "Un assemblage signature NOTA COFFEE, équilibré et unique."
    },
    prices: { 250: 0, 500: 0, 1000: 0 }
  },
  {
    id: "herbal-coffee",
image: "/images/coffee_herbs.jpg",
    name: {
      ar: "قهوة NOTA بالأعشاب",
      fr: "Café NOTA aux herbes"
    },
    desc: {
      ar: "خليط مبتكر يجمع القهوة مع الأعشاب العطرية لنكهة مميزة.",
      fr: "Un mélange original de café et d'herbes aromatiques."
    },
    prices: { 250: 0, 500: 0, 1000: 0 }
  }
];
