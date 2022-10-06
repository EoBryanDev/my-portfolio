import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Sections = ({
  children,
  background,
  id,
  int,
}) => (
  <Styled.Container background={background} id={id} int={int}>
    {children}
  </Styled.Container>
);

Sections.propTypes = {
  children: P.node.isRequired,
  background: P.bool.isRequired,
  id: P.string.isRequired,
  int: P.bool.isRequired,
};
