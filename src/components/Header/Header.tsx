import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import { Assets } from "src/assets";
import { Button } from "src/components/Button";
import { useCartContext } from "src/contexts/CartContext";

import {
  Actions,
  HeaderContainer,
  Content,
  TotalAmount,
} from "./Header.styles";

export function Header() {
  const { totalAmount } = useCartContext();

  return (
    <HeaderContainer>
      <Content>
        <Link to="/">
          <img src={Assets.LOGO} />
        </Link>
        <Actions>
          <Button variant="purple-light">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </Button>
          <Link to="/checkout">
            <Button variant="yellow-light">
              {totalAmount > 0 && <TotalAmount>{totalAmount}</TotalAmount>}
              <ShoppingCart size={20} weight="fill" />
            </Button>
          </Link>
        </Actions>
      </Content>
    </HeaderContainer>
  );
}
