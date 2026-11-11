"use client";
import Link from "next/link";
import { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { products, WEIGHTS, WHATSAPP, Weight } from "@/data/products";
import { useStore, unitPrice, wLabel } from "@/lib/store";
import Price from "@/components/Price";

export default function Cart() {
  const { lang, t, lines, total, setQty, setWeight, remove } = useStore();
  const [step, setStep] = useState<"cart" | "form" | "review">("cart");
  const [f, setF] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const money = (v: number) => (v > 0 ? `${v} MAD` : t.onRequest);

  const message = [
    `*NOTA COFFEE – ${t.orderTitle}*`, "",
    `${t.name}: ${f.name}`, `${t.phone}: ${f.phone}`, `${t.city}: ${f.city}`, `${t.address}: ${f.address}`,
    ...(f.notes ? [`${t.notes}: ${f.notes}`] : []), "",
    ...lines.map((l, i) => {
      const p = products.find((x) => x.id === l.id)!, u = unitPrice(l.id, l.weight);
      return `${i + 1}. ${p.name[lang]} | ${wLabel(l.weight)} | ${l.grind === "whole" ? t.whole : t.ground} | ${t.qty}: ${l.qty} | ${money(u)} → ${money(u * l.qty)}`;
    }), "", `*${t.total}: ${money(total)}*`,
  ].join("\n");

  const send = () => window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  const inp = "w-full rounded-xl border border-cream-dark bg-white px-4 py-3";

  if (!lines.length) return <main className="p-12 text-center"><p className="mb-4 text-lg">{t.empty}</p><Link href="/#coffee" className="underline font-bold">{t.coffee}</Link></main>;

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl font-bold mb-5">{step === "review" ? t.review : t.cart}</h1>

      {step !== "review" && lines.map((l, i) => {
        const p = products.find((x) => x.id === l.id)!;
        return (
          <div key={i} className="bg-white rounded-2xl p-3 mb-3 flex gap-3 shadow-sm">
            <img src={p.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1 space-y-2">
              <div className="font-bold">{p.name[lang]} <span className="text-sm font-normal text-coffee-700">· {l.grind === "whole" ? t.whole : t.ground}</span></div>
              <select value={l.weight} onChange={(e) => setWeight(i, Number(e.target.value) as Weight)} className="border border-cream-dark rounded-lg px-2 py-2 bg-cream">
                {WEIGHTS.map((w) => <option key={w} value={w}>{wLabel(w)}</option>)}
              </select>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button aria-label="-" onClick={() => setQty(i, l.qty - 1)} className="h-10 w-10 grid place-items-center rounded-full bg-cream"><Minus size={16} /></button>
                  <b className="w-6 text-center">{l.qty}</b>
                  <button aria-label="+" onClick={() => setQty(i, l.qty + 1)} className="h-10 w-10 grid place-items-center rounded-full bg-cream"><Plus size={16} /></button>
                </div>
                <div className="text-sm text-end"><div className="text-coffee-700"><Price value={unitPrice(l.id, l.weight)} /></div><b><Price value={unitPrice(l.id, l.weight) * l.qty} /></b></div>
                <button aria-label={t.remove} onClick={() => remove(i)} className="h-10 w-10 grid place-items-center text-red-700"><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        );
      })}

      {step === "review" ? (
        <pre dir="auto" className="whitespace-pre-wrap bg-white rounded-2xl p-4 text-sm font-sans leading-relaxed">{message}</pre>
      ) : (
        <div className="flex justify-between text-xl font-bold bg-coffee-900 text-cream rounded-2xl px-5 py-4 mb-4"><span>{t.total}</span><span><Price value={total} /></span></div>
      )}

      {step === "cart" && <button onClick={() => setStep("form")} className="w-full bg-gold text-coffee-900 font-bold text-lg rounded-2xl py-4">{t.complete}</button>}

      {step === "form" && (
        <form onSubmit={(e) => { e.preventDefault(); setStep("review"); }} className="space-y-3">
          <input required className={inp} placeholder={t.name} value={f.name} onChange={set("name")} />
          <input required type="tel" inputMode="tel" className={inp} placeholder={t.phone} value={f.phone} onChange={set("phone")} />
          <input required className={inp} placeholder={t.city} value={f.city} onChange={set("city")} />
          <input required className={inp} placeholder={t.address} value={f.address} onChange={set("address")} />
          <textarea className={inp} rows={2} placeholder={t.notes} value={f.notes} onChange={set("notes")} />
          <button className="w-full bg-gold text-coffee-900 font-bold text-lg rounded-2xl py-4">{t.toReview}</button>
        </form>
      )}

      {step === "review" && (
        <div className="space-y-3 mt-4">
          <button onClick={send} className="w-full bg-[#25D366] text-white font-bold text-lg rounded-2xl py-4">{t.send}</button>
          <button onClick={() => setStep("form")} className="w-full border-2 border-coffee-800 rounded-2xl py-3 font-bold">{t.back}</button>
        </div>
      )}
    </main>
  );
}
