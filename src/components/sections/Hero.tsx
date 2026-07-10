"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle, ArrowDown, Heart } from "lucide-react";
import { buildWhatsUrl, defaultWhatsMessage } from "@/lib/whatsapp";
import { FLAVORS } from "@/lib/flavors";

const VITRINE = FLAVORS.map((f) => f.img);

const LABELS = FLAVORS.map((f) => f.nome);

export function Hero() {
  return (
    <section
      id="top"
      className="light-section relative pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden"
    >
      <div className="container-doucier text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <span className="divider-light text-[11px] tracking-[0.45em] uppercase">
            <Heart size={11} fill="currentColor" /> Sobremesas no pote
          </span>

          <h1 className="mt-6 font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-black tracking-tight">
            Doces que cabem
            <br />
            <span className="font-script italic text-stone-700 font-normal">na palma da mão.</span>
          </h1>

          <p className="mt-7 text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
            Mousses artesanais no pote de 120ml — quatro sabores feitos com
            ingredientes selecionados, prontos pra você se apaixonar.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={buildWhatsUrl(defaultWhatsMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#fafaf7] text-stone-900 border border-stone-300 font-medium hover:bg-white hover:border-stone-900 transition"
            >
              <MessageCircle size={18} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#sabores"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#fafaf7] text-stone-900 border border-stone-300 font-medium hover:bg-white hover:border-stone-900 transition"
            >
              Ver vitrine
              <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vitrine — marquee infinito (desativado por enquanto) */}
      {false && (
      <div className="relative mt-16">
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafaf7] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafaf7] to-transparent z-10" />

          <div className="marquee-track gap-4 py-2">
            {[...VITRINE, ...VITRINE].map((src, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[260px] md:w-[320px] aspect-[4/5] rounded-sm overflow-hidden border border-stone-200 group"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs tracking-widest uppercase">
                  {LABELS[i % LABELS.length]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

    </section>
  );
}
