import styled, { css, DefaultTheme } from "styled-components";

export const IntroContainer = styled.section`
  padding-block: 9.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Background = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 58.8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme["base-title"]};

  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 4.8rem;
  line-height: 6.24rem;
`;

export const SubTitle = styled.h4`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme["base-subtitle"]};

  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

export const FeaturesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  column-gap: 4rem;
  margin-top: 6.6rem;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  font-size: 1.6rem;
`;

type FeatureIconProps = {
  color: keyof DefaultTheme;
};

export const FeatureIcon = styled.div<FeatureIconProps>`
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
