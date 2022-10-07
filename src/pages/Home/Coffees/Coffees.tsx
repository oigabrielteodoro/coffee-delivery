import { coffees } from "src/lib/Coffees";

import { CoffeeCard } from "./CoffeeCard";

import { CoffeeList, CoffeesContainer, Title } from "./Coffees.styles";

export function Coffees() {
  return (
    <CoffeesContainer>
      <Title>Nossos cafés</Title>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeesContainer>
  );
}
