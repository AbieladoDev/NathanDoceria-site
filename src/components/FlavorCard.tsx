"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Plus, MessageCircle } from "lucide-react";
import { Flavor, formatPrice } from "@/lib/flavors";
import { useCart } from "@/store/cart";
import { buildWhatsUrl } from "@/lib/whatsapp";

export function FlavorCard({ flavor, index }: { flavor: Flavor; index: number }) {
  const add = useCart((s) => s.add);

  const pedirAgora = buildWhatsUrl(
    `Olá Doucier! Quero pedir 1x ${flavor.nomeCurto} (${formatPrice(flavor.preco)})`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-light flex flex-col overflow-hidden group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={flavor.img}
          alt={flavor.nome}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div
          className="absolute top-3 right-3 px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-sm bg-white text-black border border-stone-200"
        >
          120ml
        </div>
      </div>

      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <h3
          className="font-script text-xl sm:text-3xl leading-none"
          style={{ color: flavor.accentHex }}
        >
          {flavor.nomeCurto}
        </h3>
        <div className="mt-2 sm:mt-3 h-px w-8 sm:w-10 bg-stone-300" />
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed flex-1">
          {flavor.desc}
        </p>

        <div className="mt-3 sm:mt-5 flex items-center justify-between gap-2">
          <div className="text-lg sm:text-2xl font-serif text-black">
            {formatPrice(flavor.preco)}
          </div>
          <button
            onClick={() => add(flavor.slug)}
            className="btn-outline-dark !py-1.5 !px-2 sm:!py-2 sm:!px-3 text-xs sm:text-sm"
            aria-label={`Adicionar ${flavor.nomeCurto}`}
          >
            <Plus size={14} />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>

        <a
          href={pedirAgora}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whats mt-2 sm:mt-3 text-xs sm:text-sm w-full"
        >
          <MessageCircle size={14} />
          Pedir agora
        </a>
      </div>
    </motion.div>
  );
}
