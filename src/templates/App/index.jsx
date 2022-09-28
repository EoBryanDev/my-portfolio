import React, { useState } from 'react';
import { HomeSection } from '../../components/Home';
import { Introducing } from '../../components/Introducing';

import { Menu } from '../../components/Menu';
import { Navbar } from '../../components/Navbar';
import { Sections } from '../../components/Sections';

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
        <Introducing />
      </Sections>
      <Sections background id="section3">
        Hello
      </Sections>

    </>
  );
}

export default Home;
