import React from 'react';

import { IconContext } from 'react-icons';
import { MdClear, MdReorder, MdMoreVert } from 'react-icons/md';
import P from 'prop-types';
import * as Styled from './styles';

export const Navbar = ({
  menuClose,
  setMenuClose,
  settingsClose,
  setSettingsClose,
  theme,
}) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <IconContext.Provider value={{ size: '1.5em' }}>
    <Styled.NavgationBar menuClose={menuClose}>
      {theme === 'dark'
        ? <img src="https://res.cloudinary.com/dhz1saoac/image/upload/v1666565133/mbInc_dark_k9gfgl.svg" alt="mb inc logtype" />
        : <img src="https://res.cloudinary.com/dhz1saoac/image/upload/v1666565133/mbInc_light_alqrsg.svg" alt="mb inc logtype" />}

      <p>It&apos;s the Bryan</p>
      <div>
        <div>
          {menuClose
            ? <MdReorder onClick={() => setMenuClose(!menuClose)} />
            : <MdClear onClick={() => setMenuClose(!menuClose)} />}
        </div>
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
};
