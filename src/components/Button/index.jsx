/* eslint-disable react/require-default-props */
import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const ButtonShape = ({ children, background = true, href }) => (
  <Styled.ButtonShape background={background}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Styled.ButtonShape>
);

ButtonShape.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
  href: P.string,
};
