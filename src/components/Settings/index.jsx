/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import P from 'prop-types';
import Switch from 'react-switch';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import * as Styled from './styles';

const Settings = ({ settingsClose, onChangeTheme }) => {
  const { name, colors } = useContext(ThemeContext);
  return (
    <Styled.Container settingsClose={settingsClose}>
      {name === 'light' ? 'Light Mode' : 'Dark Mode'}
      <MdOutlineDarkMode />
      <Switch
        onChange={onChangeTheme}
        checked={name === 'light'}
        height={20}
        width={50}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={30}
        offColor={colors.secondaryColor}
        onColor={colors.darkColor}
      />
      <MdOutlineLightMode />
    </Styled.Container>
  );
};

export default Settings;

Settings.propTypes = {
  settingsClose: P.bool.isRequired,
  onChangeTheme: P.node.isRequired,
};
