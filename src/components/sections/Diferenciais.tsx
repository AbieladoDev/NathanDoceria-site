"use client";
import { motion } from "motion/react";
import { Package, Leaf, Snowflake, Heart } from "lucide-react";

const ITEMS = [
  { icon: Package, title: "Pote 120 ml", desc: "Quantidade ideal para saborear." },
  { icon: Leaf, title: "Ingredientes de qualidade", desc: "Sabor que você sente de verdade." },
  { icon: Snowflake, title: "Mantenha refrigerado", desc: "Conservar entre 2°C e 6°C." },
  { icon: Heart, title: "Feito à mão", desc: "Produção artesanal, lote pequeno." },
];

export function Diferenciais() {
  return (
    <section className="py-14 lg:py-16">
      <div className="container-doucier">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="gold-divider text-[11px] tracking-[0.45em] uppercase">
            Por que Doucier
          </span>
          <h2 className="mt-5 section-title text-3xl md:text-4xl">
            Pequenos detalhes, grande sabor
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-sm border border-gold-400/40 flex items-center justify-center text-gold-300">
                <i.icon size={22} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-gold-200">{i.title}</h4>
                <p className="text-sm text-cream/70 mt-1">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
