/* eslint-disable array-callback-return */
/* eslint-disable semi */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import Slider from 'react-slick';
import * as Styled from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { services } from './mock';

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'slick-dots',
};

export const Services = () => (
  <Styled.BackgroundSlider>
    <Slider {...settings}>
      {services.map((service) => (
        <div key={service.id}>
          <Styled.ServiceImg>
            <img src={service.url} alt={service.alt} />
          </Styled.ServiceImg>
          <h2>{service.title}</h2>
          <Styled.BackgroundServices>
            <li><h3>{service.itens[0]}</h3></li>
            <li>{service.itens[1]}</li>
          </Styled.BackgroundServices>
        </div>
      ))}
    </Slider>
  </Styled.BackgroundSlider>
);
