import styled, { css, DefaultTheme } from "styled-components";

export const SuccessContainer = styled.main`
  margin-top: 11.2rem;

  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

export const TitleContainer = styled.div`
  > h1 {
    font-size: 3.2rem;
    font-weight: 800;
    font-family: "Baloo 2", sans-serif;

    line-height: 130%;
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  > h2 {
    font-size: 2rem;
    font-weight: 400;

    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10.2rem;

  > img {
    margin-left: auto;
  }
`;

export const OrderContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 4rem;
  row-gap: 3.2rem;
  border-radius: 0.6rem 3.6rem;
  background: ${({ theme }) => theme.white};

  &::after {
    content: "";
    position: absolute;
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    border-radius: 0.6rem 3.6rem;
    background: ${({ theme }) =>
      `linear-gradient(102.89deg, ${theme.yellow} 2.61%, ${theme.purple} 98.76%)`};
    z-index: -1;
  }
`;

export const Order = styled.li`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  font-size: 1.6rem;
  white-space: nowrap;
`;

type FeatureIconProps = {
  color: keyof DefaultTheme;
};

export const OrderIcon = styled.div<FeatureIconProps>`
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;

  display: grid;
  place-items: center;

  ${({ theme, color }) => css`
    background-color: ${theme[color]};
    color: ${theme.white};
  `}
`;
