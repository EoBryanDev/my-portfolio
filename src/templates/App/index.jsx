import React, { useState } from 'react';

import GoToTop from '../../components/GoToTop';
import { HomeSection } from '../../components/Home';
import { Introducing } from '../../components/Introducing';

import { Menu } from '../../components/Menu';
import { Navbar } from '../../components/Navbar';
import { Sections } from '../../components/Sections';
import { Services } from '../../components/Services---';
import { Resume } from '../../components/Resume---';
import { Skills } from '../../components/Skills';

function Home() {
  const [menuClose, setMenuClose] = useState(true);

  return (
    <>
      <Navbar menuClose={menuClose} setMenuClose={setMenuClose} />
      <Menu menuClose={menuClose} />
      <Sections background id="section1">
        <HomeSection />
      </Sections>
      <Sections background={false} id="section2">
        <Introducing background />
        <Resume>Check out my resumè</Resume>
      </Sections>
      <Sections background id="section3">
        <Skills />
      </Sections>
      <Sections background={false} id="section4">
        <Services />
      </Sections>
      <Sections background id="section5">
        PortFolio
      </Sections>
      <Sections background={false} id="section6">
        Get in touch
      </Sections>
      <GoToTop />
    </>
  );
}

export default Home;
