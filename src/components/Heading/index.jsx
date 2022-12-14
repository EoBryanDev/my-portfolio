import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, colorDark = true }) => (
  <Styled.Title colorDark={colorDark}>
    {children}
  </Styled.Title>
);

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
};
