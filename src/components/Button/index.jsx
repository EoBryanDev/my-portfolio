import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const ButtonShape = ({ children, background = true }) => (
  <Styled.ButtonShape background={background}>
    {children}
  </Styled.ButtonShape>
);

ButtonShape.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
};
