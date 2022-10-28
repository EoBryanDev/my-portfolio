import React from 'react';

import { IconContext } from 'react-icons';
import {
  MdClear, MdReorder, MdMoreVert, MdWork, MdSend,
} from 'react-icons/md';
import { FiHome } from 'react-icons/fi';
import { HiIdentification, HiPhotograph } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';

import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const Navbar = ({
  menuClose,
  setMenuClose,
  settingsClose,
  setSettingsClose,
  theme,
  pageSize,
}) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <IconContext.Provider value={{ size: '1.5em' }}>
    <Styled.NavgationBar menuClose={menuClose}>
      {theme === 'dark'
        ? <img src="https://res.cloudinary.com/dhz1saoac/image/upload/v1666565133/mbInc_dark_k9gfgl.svg" alt="mb inc logtype" />
        : <img src="https://res.cloudinary.com/dhz1saoac/image/upload/v1666565133/mbInc_light_alqrsg.svg" alt="mb inc logtype" />}

      <p>It&apos;s the Bryan</p>
      <div>
        {pageSize > 1200 ? (
          <div>
            <ul>
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
            </ul>
          </div>
        )
          : (
            <div>
              {menuClose
                ? <MdReorder onClick={() => setMenuClose(!menuClose)} />
                : <MdClear onClick={() => setMenuClose(!menuClose)} />}
            </div>
          )}
        <div>
          {settingsClose
            ? <MdMoreVert onClick={() => setSettingsClose(!settingsClose)} />
            : <MdClear onClick={() => setSettingsClose(!settingsClose)} />}
        </div>
      </div>
    </Styled.NavgationBar>
  </IconContext.Provider>
);

Navbar.propTypes = {
  menuClose: P.bool.isRequired,
  setMenuClose: P.node.isRequired,
  settingsClose: P.bool.isRequired,
  setSettingsClose: P.node.isRequired,
  theme: P.string.isRequired,
  pageSize: P.string.isRequired,
};
