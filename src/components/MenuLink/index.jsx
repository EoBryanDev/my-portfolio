import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children }) => (
  <Styled.Item>
    {children}
  </Styled.Item>
);

MenuLink.propTypes = {
  children: P.node.isRequired,
};
