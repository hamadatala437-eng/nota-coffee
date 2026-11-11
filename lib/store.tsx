"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { products, Weight } from "@/data/products";

export type Lang = "ar" | "fr";
export type Grind = "whole" | "ground";
export type Line = { id: string; weight: Weight; grind: Grind; qty: number };

const dict = {
  ar: { home: "الرئيسية", coffee: "قهوتنا", about: "من نحن", contact: "اتصل بنا", cart: "السلة", other: "Français",
    heroTitle: "قهوتك... نكهة مختلفة، تجربة استثنائية", heroDesc: "مزيجات قهوة فاخرة منسّمة بأعشاب طبيعية، محمّصة بعناية لتمنحك تجربة لا تُنسى.", discover: "اكتشف قهوتنا",
    details: "التفاصيل", add: "أضف إلى السلة", added: "تمت الإضافة ✓", weight: "الوزن", prep: "طريقة التحضير", whole: "حبوب كاملة", ground: "مطحونة",
    onRequest: "السعر عند الطلب", aboutTitle: "من نحن", aboutText: "NOTA COFFEE علامة مغربية تعشق القهوة الجيدة. نمزج أجود أنواع البن مع أعشاب طبيعية لنقدّم لك نكهات أصيلة بروح عصرية وجودة عالمية.",
    contactTitle: "تواصل معنا", wa: "واتساب", ig: "إنستغرام", empty: "سلتك فارغة", total: "المجموع", complete: "إتمام الطلب", name: "الاسم الكامل", phone: "رقم الهاتف", city: "المدينة", address: "عنوان التوصيل الكامل", notes: "ملاحظات (اختياري)",
    review: "راجع طلبك", send: "إرسال الطلب عبر واتساب", back: "رجوع", remove: "حذف", qty: "الكمية", orderTitle: "طلب جديد", product: "المنتج", price: "السعر", toReview: "متابعة" },
  fr: { home: "Accueil", coffee: "Nos cafés", about: "À propos", contact: "Contact", cart: "Panier", other: "العربية",
    heroTitle: "NOTA COFFEE — Le goût d'une expérience unique.", heroDesc: "Des mélanges de café premium infusés d'herbes naturelles, torréfiés avec soin pour une expérience inoubliable.", discover: "Découvrir nos cafés",
    details: "Détails", add: "Ajouter au panier", added: "Ajouté ✓", weight: "Poids", prep: "Préparation", whole: "Grains entiers", ground: "Moulu",
    onRequest: "Prix sur demande", aboutTitle: "À propos", aboutText: "NOTA COFFEE est une marque marocaine passionnée de bon café. Nous associons les meilleurs grains à des herbes naturelles pour des saveurs authentiques, modernes et de qualité internationale.",
    contactTitle: "Contactez-nous", wa: "WhatsApp", ig: "Instagram", empty: "Votre panier est vide", total: "Total", complete: "Finaliser la commande", name: "Nom complet", phone: "Téléphone", city: "Ville", address: "Adresse de livraison complète", notes: "Notes (facultatif)",
    review: "Vérifiez votre commande", send: "Envoyer la commande via WhatsApp", back: "Retour", remove: "Supprimer", qty: "Quantité", orderTitle: "NOUVELLE COMMANDE", product: "Produit", price: "Prix", toReview: "Continuer" },
};
export type T = typeof dict.ar;

export const wLabel = (w: number) => (w === 1000 ? "1kg" : `${w}g`);
export const unitPrice = (id: string, w: Weight) => products.find((p) => p.id === id)?.prices[w] ?? 0;

type Ctx = { lang: Lang; t: T; toggle: () => void; lines: Line[]; count: number; total: number;
  add: (l: Line) => void; setQty: (i: number, q: number) => void; setWeight: (i: number, w: Weight) => void; remove: (i: number) => void; clear: () => void };
const C = createContext<Ctx>(null as unknown as Ctx);
export const useStore = () => useContext(C);

export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const [lines, setLines] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const l = localStorage.getItem("nota-lang"); if (l === "fr" || l === "ar") setLang(l);
      const c = localStorage.getItem("nota-cart"); if (c) setLines(JSON.parse(c));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (ready) localStorage.setItem("nota-lang", lang);
  }, [lang, ready]);
  useEffect(() => { if (ready) localStorage.setItem("nota-cart", JSON.stringify(lines)); }, [lines, ready]);

  const merge = (arr: Line[]) => arr.reduce<Line[]>((a, l) => {
    const j = a.findIndex((x) => x.id === l.id && x.weight === l.weight && x.grind === l.grind);
    if (j >= 0) a[j] = { ...a[j], qty: a[j].qty + l.qty }; else a.push({ ...l });
    return a; }, []);
  const value: Ctx = {
    lang, t: dict[lang], toggle: () => setLang(lang === "ar" ? "fr" : "ar"), lines,
    count: lines.reduce((s, l) => s + l.qty, 0),
    total: lines.reduce((s, l) => s + unitPrice(l.id, l.weight) * l.qty, 0),
    add: (l) => setLines((p) => merge([...p, l])),
    setQty: (i, q) => setLines((p) => (q < 1 ? p : p.map((l, k) => (k === i ? { ...l, qty: q } : l)))),
    setWeight: (i, w) => setLines((p) => merge(p.map((l, k) => (k === i ? { ...l, weight: w } : l)))),
    remove: (i) => setLines((p) => p.filter((_, k) => k !== i)),
    clear: () => setLines([]),
  };
  return <C.Provider value={value}>{children}</C.Provider>;
}
