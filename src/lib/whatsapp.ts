export const WHATS_NUMBER = "5551995040101";
export const WHATS_DISPLAY = "(51) 99504-0101";
export const INSTAGRAM = "doucier";

export function buildWhatsUrl(message: string) {
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsMessage() {
  return "Olá Doucier! Gostaria de fazer um pedido 🍫";
}
