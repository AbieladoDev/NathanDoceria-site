import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Sabores } from "@/components/sections/Sabores";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Instagram } from "@/components/sections/Instagram";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function LandingPage() {
  return (
    <main className="relative">
      <Header />

      <Hero />
      <Sabores />
      <ComoFunciona />

      <div className="relative h-20 light-section overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" fill="#1a0e08" />
        </svg>
      </div>

      <div className="dark-section">
        <Diferenciais />
        <Depoimentos />
        <Instagram />
        <FAQ />
        <Footer />
      </div>

      <WhatsappFloat />
    </main>
  );
}
