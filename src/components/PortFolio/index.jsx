/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Slider from 'react-slick';
import Test from '../../assets/Test.png';

import * as Styled from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { portFolio } from './mock';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export const PortFolio = () => (
  <Styled.Container>
    <h2>What I&apos;ve been working on</h2>
    <Styled.SliderContainer>
      <Slider {...settings}>
        {portFolio.map((item) => (
          <div key={item.id}>
            <Styled.Cover>
              <img src={Test} alt="Cover" />
              <div className="title_overlay title_overlay--blur">
                <h3>{item.title}</h3>
              </div>
            </Styled.Cover>
            <Styled.ProjectNav>
              <button type="submit">Visit</button>
              {item.techs.map((itens) => <img src={itens.url} alt={itens.alt} />)}
            </Styled.ProjectNav>
          </div>
        ))}
      </Slider>
    </Styled.SliderContainer>
  </Styled.Container>
);
