"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { MessageCircle, X, Trash2, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/store/cart";
import { useUI } from "@/store/ui";
import { FLAVORS, formatPrice } from "@/lib/flavors";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

function PanelContent({
  items,
  add,
  remove,
  clear,
  total,
  url,
  onClose,
}: {
  items: ReturnType<typeof useCart.getState>["items"];
  add: (s: string) => void;
  remove: (s: string) => void;
  clear: () => void;
  total: number;
  url: string;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            className="h-8 w-8 grid place-items-center rounded-sm border border-gold-400/40 text-gold-300"
          >
            <ShoppingBag size={16} />
          </motion.div>
          <h4 className="font-serif text-lg text-gold-200">Seu pedido</h4>
        </div>
        <button
          onClick={onClose}
          className="text-gold-300/80 hover:text-gold-200 hover:rotate-90 transition-transform duration-300"
        >
          <X size={18} />
        </button>
      </div>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-8 text-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mx-auto h-14 w-14 grid place-items-center rounded-sm border border-gold-400/30 text-gold-300/70 mb-3"
          >
            <Sparkles size={24} />
          </motion.div>
          <p className="text-sm text-cream/70 px-4">
            Seu pote tá vazio. Adicione um sabor ou chama a gente direto.
          </p>
        </motion.div>
      ) : (
        <ul className="space-y-2 max-h-[50vh] sm:max-h-64 overflow-auto pr-1">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((it) => {
              const f = FLAVORS.find((x) => x.slug === it.slug)!;
              return (
                <motion.li
                  key={it.slug}
                  layout
                  initial={{ opacity: 0, x: 30, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: -30, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between gap-2 text-sm border-b border-gold-400/15 pb-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-cream truncate">{f.nomeCurto}</div>
                    <motion.div
                      key={it.qty}
                      initial={{ scale: 1.15 }}
                      animate={{ scale: 1 }}
                      className="text-xs font-medium"
                      style={{ color: f.accentHex }}
                    >
                      {formatPrice(f.preco * it.qty)}
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => remove(it.slug)}
                      className="h-8 w-8 grid place-items-center border border-gold-400/30 text-gold-300 hover:bg-gold-400/15 active:scale-90 transition"
                    >
                      <Minus size={12} />
                    </button>
                    <motion.span
                      key={it.qty}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-6 text-center text-cream"
                    >
                      {it.qty}
                    </motion.span>
                    <button
                      onClick={() => add(it.slug)}
                      className="h-8 w-8 grid place-items-center border border-gold-400/30 text-gold-300 hover:bg-gold-400/15 active:scale-90 transition"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      )}

      {items.length > 0 && (
        <motion.div layout className="mt-3 flex items-center justify-between text-sm">
          <span className="text-cream/70">Total</span>
          <motion.span
            key={total}
            initial={{ scale: 1.2, color: "#e8c896" }}
            animate={{ scale: 1, color: "#d4a574" }}
            className="font-serif text-2xl"
          >
            {formatPrice(total)}
          </motion.span>
        </motion.div>
      )}

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-whats !text-white w-full mt-3"
      >
        <MessageCircle size={16} />
        {items.length === 0 ? "Chamar no WhatsApp" : "Finalizar pelo Whats"}
      </motion.a>

      {items.length > 0 && (
        <button
          onClick={clear}
          className="mt-2 w-full text-xs text-cream/40 hover:text-gold-300 flex items-center justify-center gap-1 transition"
        >
          <Trash2 size={12} /> Limpar pedido
        </button>
      )}
    </>
  );
}

export function WhatsappFloat() {
  const items = useCart((s) => s.items);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const total = useCart((s) => s.total());
  const count = useCart((s) => s.count());
  const url = useCart((s) => s.whatsUrl());
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bumpKey, setBumpKey] = useState(0);
  const isMobile = useIsMobile();
  const menuOpen = useUI((s) => s.mobileMenuOpen);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (count > 0) setBumpKey((k) => k + 1);
  }, [count]);

  // lock body scroll when sheet open on mobile
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isMobile]);

  if (!mounted) return null;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > 120 || info.velocity.y > 500) setOpen(false);
  };

  const panelInner = (
    <PanelContent
      items={items}
      add={add}
      remove={remove}
      clear={clear}
      total={total}
      url={url}
      onClose={() => setOpen(false)}
    />
  );

  return (
    <>
      {/* MOBILE — bottom sheet */}
      {isMobile && (
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                key="sheet"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 32, stiffness: 320 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.5 }}
                onDragEnd={handleDragEnd}
                className="fixed inset-x-0 bottom-0 z-50 rounded-t-[12px] border-t border-gold-400/40 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.6)]"
                style={{
                  background:
                    "linear-gradient(180deg, #3d2418 0%, #2a1810 60%, #1a0e08 100%)",
                  borderRadius: "12px 12px 0 0",
                }}
              >
                <div className="pt-2 pb-1 flex justify-center cursor-grab active:cursor-grabbing">
                  <div className="h-1.5 w-12 rounded-full bg-gold-400/40" />
                </div>
                <div className="px-5 pb-[max(env(safe-area-inset-bottom),1.25rem)] pt-2">
                  {panelInner}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* FLOAT button + DESKTOP popover */}
      <div
        className={`fixed bottom-5 right-5 z-50 flex flex-col items-end transition-opacity duration-200 ${
          (isMobile && open) || menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {!isMobile && (
          <AnimatePresence>
            {open && (
              <motion.div
                key="panel"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mb-3 w-[340px] max-w-[calc(100vw-2.5rem)] overflow-hidden shadow-[0_25px_60px_-20px_rgba(212,165,116,0.55)]"
              >
                <div
                  className="rounded-sm border border-gold-400/40 p-4"
                  style={{
                    background:
                      "linear-gradient(160deg, #3d2418 0%, #2a1810 50%, #1a0e08 100%)",
                  }}
                >
                  {panelInner}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <motion.button
          key={bumpKey}
          onClick={() => setOpen((v) => !v)}
          animate={count > 0 ? { scale: [1, 1.18, 1], rotate: [0, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)]"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
            style={{ animationDelay: "0.6s" }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={open ? "x" : "msg"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {open ? <X size={24} /> : <MessageCircle size={26} />}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                initial={{ scale: 0, y: -10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                className="absolute -top-1 -right-1 h-6 w-6 grid place-items-center text-xs font-bold rounded-full bg-gold-400 text-chocolate-950 border-2 border-chocolate-950"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
