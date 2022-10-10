import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 0.6rem;

  padding: 4rem;

  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 0.8rem;

  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme["base-text"]};
  }
`;
