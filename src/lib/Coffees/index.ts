import { AssetsCoffees } from "../../assets";

export type CoffeeType =
  | "TRADITIONAL"
  | "WITH_MILK"
  | "SPECIAL"
  | "ALCOHOLIC"
  | "ICE_COLD";

export type Coffee = {
  name: string;
  type: CoffeeType[];
  costAmount: number;
  image: string;
  description: string;
};

export const coffeeTypeDictionary: Record<CoffeeType, string> = {
  ICE_COLD: "Gelado",
  ALCOHOLIC: "Alcoólico",
  SPECIAL: "Especial",
  TRADITIONAL: "Tradicional",
  WITH_MILK: "Com leite",
};

export const coffees: Coffee[] = [
  {
    name: "Expresso Tradicional",
    type: ["TRADITIONAL"],
    costAmount: 990,
    image: AssetsCoffees.EXPRESSO,
    description: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    name: "Expresso Americano",
    type: ["TRADITIONAL"],
    costAmount: 990,
    image: AssetsCoffees.AMERICANO,
    description: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    name: "Expresso Cremoso",
    type: ["TRADITIONAL"],
    costAmount: 990,
    image: AssetsCoffees.CREMOSO,
    description: "Café expresso tradicional com espuma cremosa",
  },
  {
    name: "Expresso Gelado",
    type: ["TRADITIONAL", "ICE_COLD"],
    costAmount: 990,
    image: AssetsCoffees.GELADO,
    description: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    name: "Café com Leite",
    type: ["TRADITIONAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.LEITE,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    name: "Latte",
    type: ["TRADITIONAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.LATTE,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    name: "Capuccino",
    type: ["TRADITIONAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.CAPUCCINO,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    name: "Macchiato",
    type: ["TRADITIONAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.MACCHIATO,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    name: "Mocaccino",
    type: ["TRADITIONAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.MOCHACCINO,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    name: "Chocolate Quente",
    type: ["SPECIAL", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.QUENTE,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    name: "Cubano",
    type: ["SPECIAL", "ALCOHOLIC", "WITH_MILK"],
    costAmount: 990,
    image: AssetsCoffees.CUBANO,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    name: "Havaiano",
    type: ["SPECIAL"],
    costAmount: 990,
    image: AssetsCoffees.HAVAIANO,
    description: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    name: "Árabe",
    type: ["SPECIAL"],
    costAmount: 990,
    image: AssetsCoffees.ARABE,
    description: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    name: "Irlandês",
    type: ["SPECIAL", "ALCOHOLIC"],
    costAmount: 990,
    image: AssetsCoffees.IRLANDES,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];
