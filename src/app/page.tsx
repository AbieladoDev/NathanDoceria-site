"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ShoppingBag, Sparkles, Instagram as InstagramIcon } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsappFloat } from "@/components/WhatsappFloat";

const links = [
  {
    href: "/cardapio",
    label: "Ver cardápio",
    sub: "Mousses no pote 120ml",
    icon: ShoppingBag,
  },
  {
    href: "/landing",
    label: "Conheça a Doucier",
    sub: "Nossa história e diferenciais",
    icon: Sparkles,
  },
  {
    href: "https://www.instagram.com/douciergourmet/",
    label: "Instagram",
    sub: "@douciergourmet",
    icon: InstagramIcon,
    external: true,
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-5 py-10"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #6b4226 0%, #4a2c1a 45%, #2a1810 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 flex flex-col items-center gap-4"
      >
        <div className="h-24 w-24 rounded-full grid place-items-center border border-gold-400/40 bg-chocolate-950/60 shadow-[0_10px_40px_-10px_rgba(212,165,116,0.4)]">
          <svg viewBox="0 0 48 48" className="h-14 w-14" aria-hidden>
            <circle cx="24" cy="24" r="22" fill="none" stroke="#e8c896" strokeWidth="1.5" />
            <text
              x="24"
              y="32"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="22"
              fill="#e8c896"
              fontWeight="500"
            >
              D
            </text>
          </svg>
        </div>
        <div className="text-center">
          <div className="font-serif text-2xl tracking-[0.2em] text-gold-200">
            DOUCIER
          </div>
          <div className="text-xs tracking-[0.35em] text-gold-300/70 mt-1">
            @douciergourmet
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-md mt-10 flex flex-col gap-3">
        {links.map((l, i) => {
          const Icon = l.icon;
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-chocolate-950/60 backdrop-blur-sm px-5 py-5 flex items-center gap-4 hover:bg-chocolate-900/70 transition-colors"
            >
              <Icon size={32} className="text-gold-300 shrink-0" />
              <div className="flex-1 text-left font-serif text-lg text-cream">
                {l.label}
              </div>
            </motion.div>
          );

          return l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <Link key={l.href} href={l.href} className="block">
              {content}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-10 text-center text-xs text-gold-300/60">
        feito por{" "}
        <a
          href="https://db.app.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-300 hover:text-gold-200 transition-colors underline-offset-2 hover:underline"
        >
          db.app
        </a>
      </div>

      <WhatsappFloat />
    </main>
  );
}
