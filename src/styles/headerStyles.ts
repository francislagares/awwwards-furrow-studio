import styled from 'styled-components/macro';

export const HeaderNav = styled.div`
  top: 72px;
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
    margin: 0 4px;
    border-radius: 100%;
    background: ${props => props.theme.red};
    display: inline-block;
    position: relative;
  }
`;

export const Menu = styled.div`
  button {
    padding: 20px;
    border: none;
    transform-origin: center;
    background: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`;
