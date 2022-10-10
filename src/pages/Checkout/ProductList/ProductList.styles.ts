import styled from "styled-components";

import { CardContainer as BaseCardContainer } from "src/components/Card/Card.styles";
import { Button as BaseButton } from "src/components/Button";

export const CardContainer = styled(BaseCardContainer)`
  border-radius: 0.6rem 4.4rem;
  margin-top: 1.2rem;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const ConfirmOrderButton = styled(BaseButton)`
  padding: 1.6rem;

  font-weight: 700;

  text-align: center;
  text-transform: uppercase;

  justify-content: center;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme["base-text"]};
  }

  > strong {
    font-size: 2rem;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;
