/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/darkTheme';

import { HomeSection } from '../../components/Home';
import { Introducing } from '../../components/Introducing';

import { Menu } from '../../components/Menu';
import { Navbar } from '../../components/Navbar';
import { Sections } from '../../components/Sections';
import { Resume } from '../../components/Resume---';
import GoToTop from '../../components/GoToTop';
import { Services } from '../../components/Services---';
import { Skills } from '../../components/Skills';
import { PortFolio } from '../../components/PortFolio';
import { Footer } from '../../components/Footer';
import { ContactMe } from '../../components/ContactMe';
import Settings from '../../components/Settings';
import { GlobalStyles } from '../../styles/global-styles';

function Home() {
  const [menuClose, setMenuClose] = useState(true);
  const [settingsClose, setSettingsClose] = useState(true);

  const [theme, setTheme] = useState(lightTheme);

  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        menuClose={menuClose}
        setMenuClose={setMenuClose}
        settingsClose={settingsClose}
        setSettingsClose={setSettingsClose}
      />
      <Menu menuClose={menuClose} />
      <Settings settingsClose={settingsClose} onChangeTheme={onChangeTheme} />
      <Sections background id="section1" int>
        <HomeSection />
      </Sections>
      <Sections background={false} id="section2" int>
        <Introducing background />
        <Resume>Check out my resumè</Resume>
      </Sections>
      <Sections background id="section3" int>
        <Skills />
      </Sections>
      <Sections background={false} id="section4" int>
        <Services />
      </Sections>
      <Sections background id="section5" int={false}>
        <PortFolio />
      </Sections>
      <Sections background={false} id="section6" int={false}>
        <ContactMe />
      </Sections>
      <Footer>Handcraft by me 2022</Footer>
      <GoToTop />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Home;
