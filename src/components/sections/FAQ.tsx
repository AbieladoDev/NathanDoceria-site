"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const ITEMS = [
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos Pix, dinheiro e cartão na entrega (débito/crédito). Combinamos tudo pelo WhatsApp.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Pedidos confirmados até 14h são entregues no mesmo dia. Após esse horário, entrega no dia seguinte.",
  },
  {
    q: "Tem pedido mínimo?",
    a: "Sim, pedido mínimo de 4 potes para entrega. Você pode misturar os sabores como quiser.",
  },
  {
    q: "Por quanto tempo o mousse dura?",
    a: "Validade de até 5 dias refrigerado entre 2°C e 6°C. Sempre fresquinho!",
  },
  {
    q: "Vocês entregam onde?",
    a: "Atendemos toda a região metropolitana. A taxa varia por bairro e é informada na hora do pedido.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-20">
      <div className="container-doucier max-w-3xl">
        <div className="text-center">
          <span className="gold-divider text-xs tracking-[0.4em] uppercase">
            Dúvidas frequentes
          </span>
          <h2 className="mt-6 section-title text-4xl md:text-5xl">
            Perguntas comuns
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="border border-gold-400/25 rounded-sm overflow-hidden bg-chocolate-900/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-chocolate-800/50 transition"
                >
                  <span className="font-serif text-lg text-gold-200">{it.q}</span>
                  <span className="text-gold-300 shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-cream/75 leading-relaxed">
                        {it.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
