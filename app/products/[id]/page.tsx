"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products, WEIGHTS, Weight } from "@/data/products";
import { Grind, useStore, wLabel } from "@/lib/store";
import Price from "@/components/Price";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t, add } = useStore();
  const [w, setW] = useState<Weight>(250);
  const [g, setG] = useState<Grind>("ground");
  const [done, setDone] = useState(false);
  const p = products.find((x) => x.id === id);
  if (!p) return <main className="p-10 text-center"><Link href="/" className="underline">{t.home}</Link></main>;
  const opt = (on: boolean) => `rounded-xl py-3 font-bold border-2 ${on ? "bg-coffee-900 text-cream border-coffee-900" : "border-coffee-800"}`;
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <img src={p.image} alt={p.name[lang]} className="w-full aspect-square object-cover rounded-3xl shadow-lg" />
      <div className="flex flex-col gap-4">
        <h1 className="font-serif text-3xl font-bold">{p.name[lang]}</h1>
        <p className="text-coffee-700">{p.desc[lang]}</p>
        <div><div className="font-bold mb-2">{t.weight}</div>
          <div className="grid grid-cols-3 gap-2">{WEIGHTS.map((x) => <button key={x} onClick={() => setW(x)} className={opt(w === x)}>{wLabel(x)}</button>)}</div></div>
        <div><div className="font-bold mb-2">{t.prep}</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setG("whole")} className={opt(g === "whole")}>{t.whole}</button>
            <button onClick={() => setG("ground")} className={opt(g === "ground")}>{t.ground}</button></div></div>
        <div className="text-2xl font-bold text-gold"><Price value={p.prices[w]} /></div>
        <button onClick={() => { add({ id: p.id, weight: w, grind: g, qty: 1 }); setDone(true); }} className="bg-coffee-900 text-cream rounded-xl py-4 font-bold text-lg">{done ? t.added : t.add}</button>
        {done && <Link href="/cart" className="text-center underline font-bold">{t.cart} →</Link>}
      </div>
    </main>
  );
}
