"use client";
import Link from "next/link";
import { ShoppingBag, Languages } from "lucide-react";
import { useStore } from "@/lib/store";

export default function Header() {
  const { t, toggle, count } = useStore();
  return (
    <header className="sticky top-0 z-30 bg-coffee-900/95 backdrop-blur text-cream">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-1">
        <Link href="/" aria-label="NOTA COFFEE"><img src="/logo/logo.jpg" alt="NOTA COFFEE" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold" /></Link>
        <nav className="order-last w-full flex justify-center gap-6 text-sm py-1 md:order-none md:w-auto md:text-base">
          <Link href="/" className="hover:text-gold">{t.home}</Link>
          <Link href="/#coffee" className="hover:text-gold">{t.coffee}</Link>
          <Link href="/#about" className="hover:text-gold">{t.about}</Link>
          <Link href="/#contact" className="hover:text-gold">{t.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="flex items-center gap-1 border border-gold/60 rounded-full px-3 h-10 text-sm hover:bg-gold hover:text-coffee-900"><Languages size={16} />{t.other}</button>
          <Link href="/cart" aria-label={t.cart} className="relative h-10 w-10 grid place-items-center rounded-full bg-gold text-coffee-900">
            <ShoppingBag size={20} />
            {count > 0 && <span className="absolute -top-1 -end-1 bg-cream text-coffee-900 text-xs font-bold rounded-full min-w-5 h-5 grid place-items-center px-1">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
