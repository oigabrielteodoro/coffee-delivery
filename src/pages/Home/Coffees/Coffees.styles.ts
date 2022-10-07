import styled from "styled-components";

export const CoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 5.4rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  font-family: "Baloo 2", sans-serif;

  line-height: 130%;
  color: ${({ theme }) => theme["base-subtitle"]};

  margin-right: auto;
`;

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;
  row-gap: 4rem;
`;
