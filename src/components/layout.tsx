/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';
import Cursor from './customCursor';
import Header from './header';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

const Layout: React.FC = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
  };

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType: any): void => {
    cursorType = (cursorStyles?.includes(cursorType) && cursorType) || false;
    // @ts-ignore
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Cursor />
        <Header onCursor={onCursor} />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
