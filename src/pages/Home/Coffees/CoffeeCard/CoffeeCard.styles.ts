import styled, { css } from "styled-components";

export const Card = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 2rem 2.4rem;
  border-radius: 0.6rem 3.6rem;

  background: ${({ theme }) => theme["base-card"]};
`;

export const Image = styled.img`
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);

  height: 12rem;
  width: 12rem;
  border-radius: 50%;
`;

export const TypeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.4rem;
  margin-top: 8rem;
`;

export const TypeBadge = styled.li`
  padding: 0.4rem 0.8rem;
  border-radius: 10rem;

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3rem;

  ${({ theme }) => css`
    background-color: ${theme["yellow-light"]};
    color: ${theme["yellow-dark"]};
  `}
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: 2rem;
  font-family: "Baloo 2", sans-serif;

  text-align: center;
  line-height: 2.6rem;
  margin-top: 1.6rem;
`;

export const Description = styled.small`
  font-size: 1.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme["base-label"]};

  text-align: center;
  line-height: 1.82rem;
  margin-top: 0.8rem;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.2rem;
`;

export const Price = styled.strong`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2.4rem;

  &::before {
    content: "R$ ";
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  row-gap: 0.4rem;

  height: 3.8rem;
  padding-inline: 1.2rem;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 0.6rem;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["base-title"]};
    min-width: 2rem;
    text-align: center;
  }
`;

export const CounterButton = styled.button`
  color: ${({ theme }) => theme.purple};
  background: transparent;

  border: 0;
  border-radius: 0.2rem;

  box-shadow: 0;
  cursor: pointer;
`;
