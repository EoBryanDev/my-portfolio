import React from 'react';

import { IconContext } from 'react-icons';
import { MdClear, MdReorder } from 'react-icons/md';
import P from 'prop-types';
import * as Styled from './styles';

export const Navbar = ({ menuClose, setMenuClose }) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <IconContext.Provider value={{ size: '1.5em' }}>
    <Styled.NavgationBar menuClose={menuClose}>
      <h1>Logo</h1>
      <p>It&apos;s the Bryan</p>
      {menuClose
        ? <MdReorder onClick={() => setMenuClose(!menuClose)} />
        : <MdClear onClick={() => setMenuClose(!menuClose)} />}
    </Styled.NavgationBar>
  </IconContext.Provider>
);

Navbar.propTypes = {
  menuClose: P.bool.isRequired,
  setMenuClose: P.node.isRequired,
};
