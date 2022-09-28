import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Sections = ({ children, background, id }) => (
  <Styled.Container background={background} id={id}>
    {children}
  </Styled.Container>
);

Sections.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
  id: P.string.isRequired,
};
