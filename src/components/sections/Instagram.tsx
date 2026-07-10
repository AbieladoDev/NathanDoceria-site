"use client";
import { motion } from "motion/react";
import { Instagram as InstaIcon } from "lucide-react";
import { INSTAGRAM } from "@/lib/whatsapp";

export function Instagram() {
  return (
    <section id="instagram" className="scroll-smooth-anchor py-16 lg:py-20">
      <div className="container-doucier">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          <span className="gold-divider text-xs tracking-[0.4em] uppercase">
            Acompanhe a gente
          </span>
          <h2 className="mt-6 section-title text-4xl md:text-5xl">
            No nosso Instagram
          </h2>
          <p className="mt-4 text-cream/70 max-w-lg">
            Bastidores, novidades, promoções e muita inspiração doce. Siga
            @{INSTAGRAM} e fique por dentro de tudo que sai fresquinho.
          </p>
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8"
          >
            <InstaIcon size={18} />
            Seguir @{INSTAGRAM}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
