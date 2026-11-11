import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/lib/store";
import Header from "@/components/Header";

const description = "NOTA COFFEE — قهوة فاخرة منسّمة بأعشاب طبيعية | Café premium infusé d'herbes naturelles. Maroc.";
export const metadata: Metadata = {
  title: "NOTA COFFEE | قهوة بالأعشاب الطبيعية – Café aux herbes naturelles",
  description,
  openGraph: { title: "NOTA COFFEE", description, type: "website", images: ["/logo/logo.jpg"], locale: "ar_MA", alternateLocale: ["fr_MA"] },
};
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl"><body>
      <Provider><Header />{children}</Provider>
    </body></html>
  );
}
