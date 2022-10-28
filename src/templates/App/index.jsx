/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';

import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/darkTheme';

import { Menu } from '../../components/Menu';
import { Navbar } from '../../components/Navbar';
import { Sections } from '../../components/Sections';
import { HomeSection } from '../../components/Home';
import { Introducing } from '../../components/Introducing';
import { Skills } from '../../components/Skills';
import { Services } from '../../components/Services---';
import { PortFolio } from '../../components/PortFolio';
import { ContactMe } from '../../components/ContactMe';
import { Footer } from '../../components/Footer';
import GoToTop from '../../components/GoToTop';
import Settings from '../../components/Settings';

function Home() {
  const [pageSize, setPageSize] = useState(window.innerWidth);
  const [menuClose, setMenuClose] = useState(true);
  const [settingsClose, setSettingsClose] = useState(true);

  const [theme, setTheme] = useState(lightTheme);

  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  };
  /* useEffect(() => {
    setPageSize(window.innerWidth);
  }, [pageSize]); */

  window.onresize = () => {
    setPageSize(window.innerWidth);
    setMenuClose(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        menuClose={menuClose}
        setMenuClose={setMenuClose}
        settingsClose={settingsClose}
        setSettingsClose={setSettingsClose}
        theme={theme.name}
        pageSize={pageSize}
      />
      <Menu menuClose={menuClose} />
      <Settings settingsClose={settingsClose} onChangeTheme={onChangeTheme} />
      <Sections background id="section1" int>
        <HomeSection theme={theme} pageSize={pageSize} />
      </Sections>
      <Sections background={false} id="section2" int>
        <Introducing background />
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
