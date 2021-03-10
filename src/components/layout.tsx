import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
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

  /* const darkTheme = {
    background: '#000',
    text: '#fff',
  }; */

  const lightTheme = {
    background: '#fff',
    text: '#000',
  };

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
