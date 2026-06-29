export type Flavor = {
  slug: string;
  nome: string;
  nomeCurto: string;
  desc: string;
  preco: number;
  accent: "amber" | "orange" | "pink" | "lime";
  accentHex: string;
  img: string;
};

export const FLAVORS: Flavor[] = [
  {
    slug: "chocolate-oreo",
    nome: "Mousse de Chocolate com Oreo",
    nomeCurto: "Chocolate com Oreo",
    desc: "Mousse de chocolate cremoso com cobertura de chocolate e base de bolacha Oreo. Clássico que nunca falha.",
    preco: 8.0,
    accent: "amber",
    accentHex: "#a06a3a",
    img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=900&q=80",
  },
  {
    slug: "maracuja",
    nome: "Mousse de Maracujá",
    nomeCurto: "Maracujá",
    desc: "Mousse de maracujá cremoso com cobertura de chocolate e base de bolacha. Refrescante e marcante.",
    preco: 8.0,
    accent: "orange",
    accentHex: "#e89a3c",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=80",
  },
  {
    slug: "morango",
    nome: "Mousse de Morango",
    nomeCurto: "Morango",
    desc: "Mousse de morango cremoso com cobertura de chocolate e base de bolacha. Doce, leve e muito saboroso.",
    preco: 8.0,
    accent: "pink",
    accentHex: "#e89aa3",
    img: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=900&q=80",
  },
  {
    slug: "limao",
    nome: "Mousse de Limão",
    nomeCurto: "Limão",
    desc: "Mousse de limão cremoso com cobertura de chocolate e base de bolacha. Sabor refrescante com toque azedinho.",
    preco: 8.0,
    accent: "lime",
    accentHex: "#b8d870",
    img: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=900&q=80",
  },
];

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
