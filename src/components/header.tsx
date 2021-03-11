import React from 'react';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav } from '../styles/headerStyles';

const Header = (): JSX.Element => {
  return (
    <HeaderNav>
      <Container fluid>
        <Flex spaceBetween noHeight>
          {/*  <Logo>Logo</Logo>
          <Menu>
            <button>
              <span></span>
            </button>
          </Menu> */}
        </Flex>
      </Container>
    </HeaderNav>
  );
};
export default Header;
