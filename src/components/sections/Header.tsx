"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/Logo";
import { MessageCircle, Menu, X, Instagram } from "lucide-react";
import { buildWhatsUrl, defaultWhatsMessage, INSTAGRAM, WHATS_DISPLAY } from "@/lib/whatsapp";
import { useUI } from "@/store/ui";

const LINKS = [
  { href: "#sabores", label: "Sabores" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const open = useUI((s) => s.mobileMenuOpen);
  const setOpen = useUI((s) => s.setMobileMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all ${
          scrolled
            ? "bg-white/85 backdrop-blur border-b border-stone-200"
            : "bg-transparent"
        }`}
      >
        <div className="container-doucier flex items-center justify-between h-14">
          <a href="#top" className="flex items-center">
            <Logo small variant="dark" />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-stone-700 hover:text-black transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-black"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="m-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              key="m-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-[340px] lg:hidden flex flex-col bg-white border-l border-stone-200"
            >
              <div className="flex items-center justify-between px-6 h-14 border-b border-stone-200">
                <Logo small variant="dark" />
                <button
                  onClick={() => setOpen(false)}
                  className="text-black hover:rotate-90 transition-transform duration-300"
                  aria-label="Fechar"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                    className="font-serif text-2xl text-black py-3 border-b border-stone-200 hover:pl-2 hover:text-stone-600 transition-all"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 pb-[max(env(safe-area-inset-bottom),1.5rem)] pt-4 border-t border-stone-200 space-y-3">
                <a
                  href={buildWhatsUrl(defaultWhatsMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whats !text-white w-full"
                >
                  <MessageCircle size={16} />
                  {WHATS_DISPLAY}
                </a>
                <a
                  href={`https://instagram.com/${INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-stone-600 hover:text-black"
                >
                  <Instagram size={14} />@{INSTAGRAM}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
