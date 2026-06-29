"use client";
import { create } from "zustand";

type UIState = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

export const useUI = create<UIState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (v) => set({ mobileMenuOpen: v }),
}));
