import * as React from 'react';

import { Link } from 'react-router-dom';
import styleComponent from '@emotion/styled-base';
import styled from '@emotion/styled';

const NavbarContainer = styled.div`
  padding: 12px 0;
`;

const LeftNavbar = styled.div`
  text-align: left;
`;

const NavbarLink = styleComponent(Link)`
  font-size: 14px;
  line-height: 16px;
  color: #898989;
  display: inline-block;
  padding: 0 12px;
`;

export default () => {
  return (
    <NavbarContainer>
      <LeftNavbar>
        <NavbarLink to={'/'}>Home</NavbarLink>
        <NavbarLink to={'/login'}>Login</NavbarLink>
      </LeftNavbar>
    </NavbarContainer>
  );
};
