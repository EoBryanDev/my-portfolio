import React from 'react';
import P from 'prop-types';

import { FiHome } from 'react-icons/fi';
import { HiIdentification, HiPhotograph } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';
import { MdWork, MdSend } from 'react-icons/md';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const Menu = ({ menuClose }) => (
  <Styled.MenuComponent menuClose={menuClose}>
    <MenuLink>
      <FiHome />
      <a href="#section1">Home</a>
    </MenuLink>
    <MenuLink>
      <HiIdentification />
      <a href="#section2">About</a>
    </MenuLink>
    <MenuLink>
      <GoGraph />
      <a href="#section3">Skills</a>
    </MenuLink>
    <MenuLink>
      <MdWork />
      <a href="#section4">Services</a>
    </MenuLink>
    <MenuLink>
      <HiPhotograph />
      <a href="#section5">Portfolio</a>
    </MenuLink>
    <MenuLink>
      <MdSend />
      <a href="#section6">Contact</a>
    </MenuLink>
  </Styled.MenuComponent>
);

Menu.propTypes = {
  //  children: P.node.isRequired,
  menuClose: P.bool.isRequired,
};
