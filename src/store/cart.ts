"use client";
import { create } from "zustand";
import { FLAVORS, formatPrice, type Flavor } from "@/lib/flavors";
import { buildWhatsUrl } from "@/lib/whatsapp";

export type CartItem = { slug: string; qty: number };

type CartState = {
  items: CartItem[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
  whatsUrl: () => string;
};

function findFlavor(slug: string): Flavor | undefined {
  return FLAVORS.find((f) => f.slug === slug);
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  add: (slug) =>
    set((s) => {
      const existing = s.items.find((i) => i.slug === slug);
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.slug === slug ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }
      return { items: [...s.items, { slug, qty: 1 }] };
    }),
  remove: (slug) =>
    set((s) => {
      const existing = s.items.find((i) => i.slug === slug);
      if (!existing) return s;
      if (existing.qty <= 1) return { items: s.items.filter((i) => i.slug !== slug) };
      return {
        items: s.items.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty - 1 } : i,
        ),
      };
    }),
  clear: () => set({ items: [] }),
  count: () => get().items.reduce((acc, i) => acc + i.qty, 0),
  total: () =>
    get().items.reduce((acc, i) => {
      const f = findFlavor(i.slug);
      return acc + (f ? f.preco * i.qty : 0);
    }, 0),
  whatsUrl: () => {
    const items = get().items;
    if (items.length === 0) {
      return buildWhatsUrl("Olá Doucier! Gostaria de fazer um pedido 🍫");
    }
    const lines = items.map((i) => {
      const f = findFlavor(i.slug);
      if (!f) return "";
      return `• ${i.qty}x ${f.nomeCurto} — ${formatPrice(f.preco * i.qty)}`;
    });
    const total = get().total();
    const msg = `Olá Doucier! Quero pedir:\n\n${lines.join("\n")}\n\n*Total: ${formatPrice(total)}*`;
    return buildWhatsUrl(msg);
  },
}));
