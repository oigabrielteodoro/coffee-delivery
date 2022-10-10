import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import { Assets } from "src/assets";
import { Button } from "src/components/Button";
import { useCartContext } from "src/contexts/CartContext";

import { Actions, HeaderContainer, TotalAmount } from "./Header.styles";

export function Header() {
  const { totalAmount } = useCartContext();

  return (
    <HeaderContainer>
      <img src={Assets.LOGO} />
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
    </HeaderContainer>
  );
}
