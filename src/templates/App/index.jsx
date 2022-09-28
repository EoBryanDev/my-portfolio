import React, { useState } from 'react';
import { HomeSection } from '../../components/Home';

import { Menu } from '../../components/Menu';
import { Navbar } from '../../components/Navbar';

function Home() {
  const [menuClose, setMenuClose] = useState(true);

  return (
    <>
      <Navbar menuClose={menuClose} setMenuClose={setMenuClose} />
      <Menu menuClose={menuClose} />
      <HomeSection background />
    </>
  );
}

export default Home;
