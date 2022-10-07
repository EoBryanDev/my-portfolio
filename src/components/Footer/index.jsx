import { React } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Footer = ({ children }) => (
  <Styled.Container>
    <h4>{children}</h4>
  </Styled.Container>
);

Footer.propTypes = {
  children: P.node.isRequired,
};
