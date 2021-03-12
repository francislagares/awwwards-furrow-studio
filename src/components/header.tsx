import React from 'react';
import { Link } from 'gatsby';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, Logo } from '../styles/headerStyles';

const Header = (): JSX.Element => {
  return (
    <HeaderNav>
      <Container fluid>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to='/'>FURR</Link>
            <span></span>
            <Link to='/'>W</Link>
          </Logo>
        </Flex>
      </Container>
    </HeaderNav>
  );
};
export default Header;
