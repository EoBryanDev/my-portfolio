import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
//  import P from 'prop-types';
import * as Styled from './styles';

const test = false;
export const Navbar = () => (
  <Styled.NavgationBar>
    <h1>Logo</h1>
    <p>It&apos;s the Bryan</p>
    {test ? <FiMenu /> : <GrClose />}

  </Styled.NavgationBar>
);

/*  Navbar.propTypes = {
  children: P.node.isRequired,
};  */
