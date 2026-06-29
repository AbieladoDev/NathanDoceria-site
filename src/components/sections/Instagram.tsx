"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Instagram as InstaIcon } from "lucide-react";
import { INSTAGRAM } from "@/lib/whatsapp";

const POSTS = [
  "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80",
  "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80",
  "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&q=80",
  "https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=600&q=80",
];

export function Instagram() {
  return (
    <section id="instagram" className="scroll-smooth-anchor py-16 lg:py-20">
      <div className="container-doucier">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="gold-divider text-xs tracking-[0.4em] uppercase">
              Acompanhe a gente
            </span>
            <h2 className="mt-6 section-title text-4xl md:text-5xl">
              No nosso Instagram
            </h2>
            <p className="mt-3 text-cream/70 max-w-lg">
              Bastidores, novidades, promoções e muita inspiração doce. Siga
              @{INSTAGRAM} e fique por dentro.
            </p>
          </div>
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-fit"
          >
            <InstaIcon size={18} />
            Seguir @{INSTAGRAM}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {POSTS.map((src, i) => (
            <motion.a
              key={src}
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-sm group border border-gold-400/20"
            >
              <Image
                src={src}
                alt={`Post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-chocolate-950/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <InstaIcon size={32} className="text-gold-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
