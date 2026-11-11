"use client";
import { MessageCircle, Instagram, Phone } from "lucide-react";
import { useStore } from "@/lib/store";
import { products, WHATSAPP, INSTAGRAM, PHONE_DISPLAY } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { t } = useStore();
  return (
    <main>
      <section className="relative text-cream text-center px-5 py-20 md:py-32 bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-700">
        <div className="max-w-3xl mx-auto fade">
          <img src="/logo/logo.jpg" alt="NOTA COFFEE" className="h-28 w-28 mx-auto rounded-full object-cover ring-4 ring-gold mb-6" />
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-snug">{t.heroTitle}</h1>
          <p className="mt-4 text-cream/85 md:text-lg">{t.heroDesc}</p>
          <a href="#coffee" className="inline-block mt-8 bg-gold text-coffee-900 font-bold rounded-full px-8 py-4 text-lg shadow-lg">{t.discover}</a>
        </div>
      </section>

      <section id="coffee" className="max-w-6xl mx-auto px-4 py-14 scroll-mt-24">
        <h2 className="font-serif text-3xl font-bold text-center mb-8">{t.coffee}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{products.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>

      <section id="about" className="bg-coffee-900 text-cream px-5 py-14 scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-gold mb-4">{t.aboutTitle}</h2>
          <p className="leading-loose">{t.aboutText}</p>
        </div>
      </section>

      <section id="contact" className="max-w-xl mx-auto px-5 py-14 text-center scroll-mt-24">
        <h2 className="font-serif text-3xl font-bold mb-6">{t.contactTitle}</h2>
        <div className="grid gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} className="flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-4 font-bold"><MessageCircle />{t.wa}: {PHONE_DISPLAY}</a>
          <a href={INSTAGRAM} className="flex items-center justify-center gap-2 bg-coffee-900 text-cream rounded-xl py-4 font-bold"><Instagram />{t.ig}</a>
          <a href={`tel:+${WHATSAPP}`} className="flex items-center justify-center gap-2 border-2 border-coffee-900 rounded-xl py-4 font-bold"><Phone />{PHONE_DISPLAY}</a>
        </div>
      </section>
      <footer className="bg-coffee-900 text-cream/70 text-center text-sm py-5">© NOTA COFFEE</footer>
    </main>
  );
}
