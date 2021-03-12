import styled, { css } from 'styled-components';

interface IContainerStyled {
  fluid?: boolean;
  spaceBetween?: boolean;
  flexEnd?: boolean;
  alignTop?: boolean;
  noHeight?: boolean;
}

export const Container = styled.div<IContainerStyled>`
  width: auto;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
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

export const Flex = styled.div<IContainerStyled>`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      justify-content: align-top;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
