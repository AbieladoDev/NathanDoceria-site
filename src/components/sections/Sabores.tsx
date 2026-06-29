"use client";
import { FLAVORS } from "@/lib/flavors";
import { FlavorCard } from "@/components/FlavorCard";

export function Sabores() {
  return (
    <section
      id="sabores"
      className="light-section scroll-smooth-anchor pt-8 pb-16 lg:pt-12 lg:pb-20 relative"
    >
      <div className="container-doucier">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-light text-[11px] tracking-[0.45em] uppercase">
            Nossos sabores
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-black">
            Quatro sabores, uma só paixão
          </h2>
          <p className="mt-4 text-stone-600">
            Sabor artesanal, textura cremosa e ingredientes selecionados em cada
            pote de 120 ml.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLAVORS.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
