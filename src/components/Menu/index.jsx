import React from 'react';
import P from 'prop-types';

import { FiHome } from 'react-icons/fi';
import { HiIdentification, HiPhotograph } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';
import { MdWork, MdSend } from 'react-icons/md';

import * as Styled from './styles';

import { MenuLink } from '../MenuLink';

export const Menu = ({ toggled = true }) => (
  <Styled.MenuComponent toggled={toggled}>
    <MenuLink>
      <FiHome />
      Home
    </MenuLink>
    <MenuLink>
      <HiIdentification />
      About
    </MenuLink>
    <MenuLink>
      <GoGraph />
      Skills
    </MenuLink>
    <MenuLink>
      <MdWork />
      Services
    </MenuLink>
    <MenuLink>
      <HiPhotograph />
      Portfolio
    </MenuLink>
    <MenuLink>
      <MdSend />
      Contact Me
    </MenuLink>
  </Styled.MenuComponent>
);

Menu.propTypes = {
  //  children: P.node.isRequired,
  toggled: P.bool.isRequired,
};
