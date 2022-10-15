import { React } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Footer = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

Footer.propTypes = {
  children: P.node.isRequired,
};
