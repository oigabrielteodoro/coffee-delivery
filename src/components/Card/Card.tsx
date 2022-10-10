import { ReactNode } from "react";
import { CardContainer, TitleContainer } from "./Card.styles";

type Props = {
  title: string;
  subTitle: string;
  icon: ReactNode;
  children: ReactNode;
};

export function Card({ title, subTitle, icon, children }: Props) {
  return (
    <CardContainer>
      <TitleContainer>
        {icon}
        <div>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
      </TitleContainer>
      {children}
    </CardContainer>
  );
}
