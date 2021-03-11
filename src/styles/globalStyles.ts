import styled, { css } from 'styled-components';

interface IContainerStyled {
  fluid: boolean;
}

export const Container = styled.div<IContainerStyled>`
  width: auto;
  height: 100%;
  margin: 0 auto;
  padding: 0 3.2rem;
  flex-grow: 1;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      margin: 0;
      padding: 0;
      max-width: 100%;
    `}
`;
