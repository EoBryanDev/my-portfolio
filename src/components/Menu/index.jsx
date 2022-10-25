import { Anchor } from 'antd';
import React from 'react';
import P from 'prop-types';

import { FiHome } from 'react-icons/fi';
import { HiIdentification, HiPhotograph } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';
import { MdWork, MdSend } from 'react-icons/md';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

const { Link } = Anchor;

export const Menu = ({ menuClose }) => (
  <Styled.MenuComponent menuClose={menuClose}>
    <Anchor targetOffset="50">
      <MenuLink>
        <FiHome />
        <Link href="#section1" title="Home" />
      </MenuLink>
      <MenuLink>
        <HiIdentification />
        <Link href="#section2" title="About" />
      </MenuLink>
      <MenuLink>
        <GoGraph />
        <Link href="#section3" title="Skills" />
      </MenuLink>
      <MenuLink>
        <MdWork />
        <Link href="#section4" title="Services" />
      </MenuLink>
      <MenuLink>
        <HiPhotograph />
        <Link href="#section5" title="Portfolio" />
      </MenuLink>
      <MenuLink>
        <MdSend />
        <Link href="#section6" title="Contact" />
      </MenuLink>

    </Anchor>
  </Styled.MenuComponent>
);

Menu.propTypes = {
  //  children: P.node.isRequired,
  menuClose: P.bool.isRequired,
};
