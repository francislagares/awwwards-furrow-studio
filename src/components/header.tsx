/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, Logo, Menu } from '../styles/headerStyles';

const Header = (): JSX.Element => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = (): void => {
    if (currentTheme === 'dark') {
      // @ts-ignore
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      // @ts-ignore
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme as string);
  }, [currentTheme]);

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to='/'>FURR</Link>
            <span
              role='button'
              tabIndex={0}
              onClick={toggleTheme}
              onKeyPress={toggleTheme}
            ></span>
            <Link to='/'>W</Link>
          </Logo>
          <Menu>
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
