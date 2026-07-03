import { Header } from "@/components/sections/Header";
import { Sabores } from "@/components/sections/Sabores";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function CardapioPage() {
  return (
    <main className="relative light-section min-h-screen">
      <Header />
      <div className="pt-24">
        <Sabores />
      </div>
      <div className="dark-section">
        <Footer />
      </div>
      <WhatsappFloat />
    </main>
  );
}
