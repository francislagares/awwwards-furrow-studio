/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';
import useElementPosition from '../hooks/useElementPosition';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, Logo, Menu } from '../styles/headerStyles';

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setHamburgerPosition,
}: any): JSX.Element => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  const toggleTheme = (): void => {
    if (currentTheme === 'dark') {
      // @ts-ignore
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      // @ts-ignore
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  const menuHover = (): void => {
    onCursor('locked');
    setHamburgerPosition({ x: position.x, y: position.y + 72 });
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme as string);
  }, [currentTheme]);

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo onMouseEnter={() => onCursor('hover')} onMouseLeave={onCursor}>
            <Link to='/'>FURR</Link>
            <span
              role='button'
              tabIndex={0}
              onClick={toggleTheme}
              onKeyPress={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            ></span>
            <Link to='/'>W</Link>
          </Logo>
          <Menu
            ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};
export default Header;
