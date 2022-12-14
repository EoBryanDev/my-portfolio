/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { MdNorth } from 'react-icons/md';

import * as Styled from './styles';

function GoToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {backToTopButton && (
        <Styled.Icon onClick={scrollUp}>
          <MdNorth />
        </Styled.Icon>
      )}
    </>

  );
}

export default GoToTop;
