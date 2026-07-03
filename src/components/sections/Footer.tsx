"use client";
import { Logo } from "@/components/Logo";
import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { WHATS_DISPLAY, INSTAGRAM, buildWhatsUrl, defaultWhatsMessage } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer
      id="contato"
      className="scroll-smooth-anchor border-t border-gold-400/20 bg-chocolate-950 pt-16 pb-8"
    >
      <div className="container-doucier grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-cream/70 max-w-md text-sm leading-relaxed">
            Doucier — sobremesas no pote feitas à mão, com ingredientes
            selecionados e muito carinho. Doces gourmet pra adoçar o seu dia.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-gold-400 uppercase">
            Fale com a gente
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={buildWhatsUrl(defaultWhatsMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold-300"
              >
                <MessageCircle size={16} /> {WHATS_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold-300"
              >
                <Instagram size={16} /> @{INSTAGRAM}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-gold-400 uppercase">
            Atendimento
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 text-gold-300" />
              <div>
                Seg a Sáb
                <br />
                09h às 19h
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold-300" />
              <div>Região Metropolitana</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-doucier mt-12 pt-6 border-t border-gold-400/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
        <span>© {new Date().getFullYear()} Doucier — Doces Gourmet.</span>
        <span>
          feito por{" "}
          <a
            href="https://db.app.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 hover:text-gold-200 transition-colors"
          >
            db.app
          </a>
        </span>
      </div>
    </footer>
  );
}
