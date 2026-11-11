"use client";
import Link from "next/link";
import { useState } from "react";
import { Product, WEIGHTS } from "@/data/products";
import { useStore } from "@/lib/store";
import Price from "./Price";

export default function ProductCard({ p }: { p: Product }) {
  const { lang, t, add } = useStore();
  const [done, setDone] = useState(false);
  const from = Math.min(...WEIGHTS.map((w) => p.prices[w]));
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-md border border-cream-dark flex flex-col">
      <Link href={`/products/${p.id}`}><img src={p.image} alt={p.name[lang]} loading="lazy" className="w-full aspect-square object-cover" /></Link>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-xl font-bold">{p.name[lang]}</h3>
        <p className="text-sm text-coffee-700">{p.desc[lang]}</p>
        <div className="text-gold font-bold text-lg"><Price value={from} /></div>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <Link href={`/products/${p.id}`} className="text-center border-2 border-coffee-800 rounded-xl py-3 font-bold text-sm">{t.details}</Link>
          <button onClick={() => { add({ id: p.id, weight: 250, grind: "ground", qty: 1 }); setDone(true); setTimeout(() => setDone(false), 1500); }}
            className="bg-coffee-900 text-cream rounded-xl py-3 font-bold text-sm active:bg-coffee-700">{done ? t.added : t.add}</button>
        </div>
      </div>
    </article>
  );
}
