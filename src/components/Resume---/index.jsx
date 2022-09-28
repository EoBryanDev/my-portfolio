import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Resume = ({ children }) => (
  <Styled.ResumeButton>
    {children}
  </Styled.ResumeButton>
);

Resume.propTypes = {
  children: P.node.isRequired,
};
