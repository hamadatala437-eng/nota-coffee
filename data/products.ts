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
  { id: "mint", image: "/images/blend-1.svg", name: { ar: "قهوة بالنعناع", fr: "Café à la Menthe" }, desc: { ar: "قهوة مختارة بنكهة النعناع المنعشة.", fr: "Café sélectionné à la menthe fraîche." }, prices: { 250: 0, 500: 0, 1000: 0 } },
  { id: "cardamom", image: "/images/blend-2.svg", name: { ar: "قهوة بالهيل", fr: "Café à la Cardamome" }, desc: { ar: "نكهة الهيل الدافئة والغنية.", fr: "La chaleur riche de la cardamome." }, prices: { 250: 0, 500: 0, 1000: 0 } },
  { id: "cinnamon", image: "/images/blend-3.svg", name: { ar: "قهوة بالقرفة", fr: "Café à la Cannelle" }, desc: { ar: "لمسة قرفة طبيعية وعطرية.", fr: "Une touche de cannelle naturelle." }, prices: { 250: 0, 500: 0, 1000: 0 } },
  { id: "saffron", image: "/images/blend-4.svg", name: { ar: "قهوة بالزعفران", fr: "Café au Safran" }, desc: { ar: "فخامة الزعفران في كل رشفة.", fr: "Le luxe du safran à chaque gorgée." }, prices: { 250: 0, 500: 0, 1000: 0 } },
  { id: "classic", image: "/images/blend-5.svg", name: { ar: "نوتا كلاسيك", fr: "NOTA Classique" }, desc: { ar: "المزيج الأصلي لقهوة نوتا.", fr: "Le mélange signature de NOTA." }, prices: { 250: 0, 500: 0, 1000: 0 } },
];
