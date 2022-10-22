import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Resume = ({ children }) => (
  <Styled.Resume>
    {children}
  </Styled.Resume>
);

Resume.propTypes = {
  children: P.node.isRequired,
};
