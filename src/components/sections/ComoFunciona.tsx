"use client";
import { motion } from "motion/react";
import { ShoppingBag, MessageCircle, Truck } from "lucide-react";

const STEPS = [
  { icon: ShoppingBag, title: "Escolha seus sabores", desc: "Monte o pedido com os mousses que mais te chamaram a atenção." },
  { icon: MessageCircle, title: "Envie pelo WhatsApp", desc: "Em um clique seu pedido vai direto pra gente, com tudo já preenchido." },
  { icon: Truck, title: "Receba em casa", desc: "Confirmamos endereço, pagamento e entregamos fresquinho até você." },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="light-section scroll-smooth-anchor py-16 lg:py-20"
    >
      <div className="container-doucier">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-light text-[11px] tracking-[0.45em] uppercase">
            Como funciona
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-black">
            Do pote pra sua casa em 3 passos
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-light p-8 text-center"
            >
              <div className="mx-auto h-14 w-14 rounded-sm border border-black flex items-center justify-center text-black">
                <s.icon size={24} />
              </div>
              <div className="mt-4 text-[10px] tracking-[0.4em] text-stone-500">
                PASSO {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-serif text-2xl text-black">{s.title}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
