import { MapPin, ShoppingCart } from "phosphor-react";

import { Assets } from "src/assets";
import { Button } from "src/components/Button";

import { Actions, HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Assets.LOGO} />
      <Actions>
        <Button variant="purple-light">
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </Button>
        <Button variant="yellow-light">
          <ShoppingCart size={20} weight="fill" />
        </Button>
      </Actions>
    </HeaderContainer>
  );
}
