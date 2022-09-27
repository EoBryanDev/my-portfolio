import React from 'react';
import P from 'prop-types';
import { FiHome } from 'react-icons/fi';
import * as Styled from './styles';

import { MenuLink } from '../MenuLink';

export const Menu = ({ toggled = true }) => (
  <Styled.MenuComponent toggled={toggled}>
    <MenuLink>
      <FiHome />
      Home
    </MenuLink>
    <MenuLink>
      About
    </MenuLink>
    <MenuLink>
      Skills
    </MenuLink>
    <MenuLink>
      Services
    </MenuLink>
    <MenuLink>
      Portfolio
    </MenuLink>
  </Styled.MenuComponent>
);

Menu.propTypes = {
  //  children: P.node.isRequired,
  toggled: P.bool.isRequired,
};
