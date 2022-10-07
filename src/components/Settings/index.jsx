import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const Settings = ({ settingsClose }) => (
  <Styled.Container settingsClose={settingsClose}>
    <div>switch darkmode</div>
    <div>switch language</div>
  </Styled.Container>
);

Settings.propTypes = {
  settingsClose: P.bool.isRequired,
};
