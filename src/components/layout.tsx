import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { useGlobalStateContext } from '../context/globalContext';

import Header from './header';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
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

  const { currentTheme } = useGlobalStateContext();

  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
