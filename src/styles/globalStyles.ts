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

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);

  /* prettier-ignore */
  transition: all .1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.red};

    &.pointer {
      border: 4px solid ${props => props.theme.text};
    }
  }
`;
