import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1.2rem;
`;

export const TotalAmount = styled.span`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  background: ${({ theme }) => theme["yellow-dark"]};
  color: ${({ theme }) => theme.white};

  font-size: 1.2rem;
  font-weight: 700;

  text-align: center;
`;
