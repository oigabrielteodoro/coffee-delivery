import { MapPin, ShoppingCart } from "phosphor-react";

import { Assets } from "../../assets";
import { Button } from "../Button";

import { Actions, HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Assets.LOGO} />
      <Actions>
        <Button variant="purple-light">
          <MapPin size={20} />
          Porto Alegre, RS
        </Button>
        <Button variant="yellow-light">
          <ShoppingCart size={20} />
        </Button>
      </Actions>
    </HeaderContainer>
  );
}
