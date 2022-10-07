import { Intro } from "./Intro";
import { Coffees } from "./Coffees";

import { HomeContainer } from "./Home.styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Coffees />
    </HomeContainer>
  );
}
