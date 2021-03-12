import React from 'react';
import { Link } from 'gatsby';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, Logo, Menu } from '../styles/headerStyles';

const Header = (): JSX.Element => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to='/'>FURR</Link>
            <span></span>
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
