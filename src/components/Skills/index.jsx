/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable semi */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Slider from 'react-slick';

import * as Styled from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { carrouselItens } from './mock';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const Skills = () => (
  <Styled.SliderCarrousel>
    <Styled.SliderContainer>
      <Slider {...settings}>
        {carrouselItens.map((item) => (
          <div key={item.id}>
            <Styled.Circle>
              <img src={item.icon} alt={item.alt} />
            </Styled.Circle>
            <h2>{item.title}</h2>
            <p>{item.paragraph}</p>
            <h3>Techs that I enjoy to work:</h3>
            <Styled.TechSlider>
              <Slider {...settings}>
                <div>
                  <img src={item.techs[0]} alt={item.techs.alt} />
                </div>
              </Slider>
            </Styled.TechSlider>
          </div>
        ))}
      </Slider>
    </Styled.SliderContainer>
  </Styled.SliderCarrousel>
);
