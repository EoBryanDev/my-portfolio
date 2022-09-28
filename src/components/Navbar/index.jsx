import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import P from 'prop-types';
import * as Styled from './styles';

export const Navbar = ({ menuClose, setMenuClose }) => (
  <Styled.NavgationBar menuClose={menuClose}>
    <h1>Logo</h1>
    <p>It&apos;s the Bryan</p>
    {menuClose
      ? <FiMenu onClick={() => setMenuClose(!menuClose)} />
      : <GrClose onClick={() => setMenuClose(!menuClose)} />}

  </Styled.NavgationBar>
);

Navbar.propTypes = {
  menuClose: P.bool.isRequired,
  setMenuClose: P.node.isRequired,
};
