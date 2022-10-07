import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Assets } from "../../../assets";
import {
  Background,
  Feature,
  FeatureIcon,
  FeaturesContainer,
  IntroContainer,
  SubTitle,
  Title,
  TypographyContainer,
} from "./Intro.styles";

export function Intro() {
  return (
    <IntroContainer>
      <TypographyContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
        <FeaturesContainer>
          <Feature>
            <FeatureIcon color="yellow-dark">
              <ShoppingCart size={18} weight="fill" />
            </FeatureIcon>
            Compra simples e segura
          </Feature>
          <Feature>
            <FeatureIcon color="base-text">
              <Package size={18} weight="fill" />
            </FeatureIcon>
            Embalagem mantém o café intacto
          </Feature>
          <Feature>
            <FeatureIcon color="yellow">
              <Timer size={18} weight="fill" />
            </FeatureIcon>
            Entrega rápida e rastreada
          </Feature>
          <Feature>
            <FeatureIcon color="purple">
              <Coffee size={18} weight="fill" />
            </FeatureIcon>
            O café chega fresquinho até você
          </Feature>
        </FeaturesContainer>
      </TypographyContainer>
      <img src={Assets.COFFEE_DELIVERY} />
      <Background src={Assets.BACKGROUND} />
    </IntroContainer>
  );
}
