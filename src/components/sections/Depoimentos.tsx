"use client";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    nome: "Mariana S.",
    texto:
      "Pedi os 4 sabores e simplesmente apaixonei. O de maracujá é viciante, equilibradinho de azedo e doce.",
    sabor: "Maracujá",
  },
  {
    nome: "Rafael C.",
    texto:
      "Atendimento pelo Whats super rápido e o mousse de chocolate com Oreo é absurdo de bom. Já virei cliente fixo.",
    sabor: "Chocolate com Oreo",
  },
  {
    nome: "Juliana T.",
    texto:
      "Comprei pra um chá de bebê e fez o maior sucesso. Cremoso de verdade, dá pra sentir o cuidado em cada detalhe.",
    sabor: "Morango",
  },
];

export function Depoimentos() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-doucier">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider text-xs tracking-[0.4em] uppercase">
            Quem prova, volta
          </span>
          <h2 className="mt-6 section-title text-4xl md:text-5xl">
            Histórias com sabor de carinho
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-doucier p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-gold-400/30" size={32} />
              <div className="flex gap-1 text-gold-300">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-cream/85 leading-relaxed">"{r.texto}"</p>
              <div className="mt-6 pt-4 border-t border-gold-400/20 flex items-center justify-between text-sm">
                <span className="font-serif text-gold-200">{r.nome}</span>
                <span className="text-cream/60">favoriou: {r.sabor}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
