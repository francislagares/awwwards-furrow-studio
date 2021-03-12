import styled from 'styled-components/macro';

export const HeaderNav = styled.div`
  top: 7.2rem;
  right: 0;
  left: 0;
  color: white;
  background: blue;
  position: absolute;
  z-index: 99;
`;

export const Logo = styled.div`
  a {
    color: ${props => props.theme.text};
    font-size: 1.8rem;
    font-weight: 800;
  }

  span {
    bottom: 2px;
    width: 1rem;
    height: 1rem;

    /* prettier-ignore */
    margin: 0 .4rem;
    border-radius: 100%;
    background: ${props => props.theme.red};
    display: inline-block;
    position: relative;
  }
`;
