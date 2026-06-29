import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Doucier — Sobremesas no Pote",
  description:
    "Mousses artesanais no pote, feitas com carinho. Sabor cremoso, ingredientes selecionados e entrega via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${dancing.variable}`}>
      <body>{children}</body>
    </html>
  );
}
