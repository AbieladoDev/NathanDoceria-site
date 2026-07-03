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
    slug: "uva",
    nome: "Mousse de Uva",
    nomeCurto: "Uva",
    desc: "Mousse de uva cremoso com cobertura de chocolate e base de bolacha.",
    preco: 8.0,
    accent: "amber",
    accentHex: "#8a5cf6",
    img: "/uva.jpeg",
  },
  {
    slug: "maracuja",
    nome: "Mousse de Maracujá",
    nomeCurto: "Maracujá",
    desc: "Mousse de maracujá cremoso com cobertura de chocolate e base de bolacha.",
    preco: 8.0,
    accent: "orange",
    accentHex: "#e89a3c",
    img: "/Marauja.jpeg",
  },
  {
    slug: "morango",
    nome: "Mousse de Morango",
    nomeCurto: "Morango",
    desc: "Mousse de morango cremoso com cobertura de chocolate e base de bolacha.",
    preco: 8.0,
    accent: "pink",
    accentHex: "#e89aa3",
    img: "/morango.jpeg",
  },
  {
    slug: "limao",
    nome: "Mousse de Limão",
    nomeCurto: "Limão",
    desc: "Mousse de limão cremoso com cobertura de chocolate e base de bolacha.",
    preco: 8.0,
    accent: "lime",
    accentHex: "#b8d870",
    img: "/limao.jpeg",
  },
];

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
