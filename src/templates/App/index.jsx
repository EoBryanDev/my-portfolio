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
import { PortFolio } from '../../components/PortFolio';
import { Footer } from '../../components/Footer';
import { ContactMe } from '../../components/ContactMe';

function Home() {
  const [menuClose, setMenuClose] = useState(true);

  return (
    <>
      <Navbar menuClose={menuClose} setMenuClose={setMenuClose} />
      <Menu menuClose={menuClose} />
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
    </>
  );
}

export default Home;
