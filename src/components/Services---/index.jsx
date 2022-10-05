/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import Slider from 'react-slick';
import * as Styled from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ButtonShape } from '../Button';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const Services = () => (
  <Styled.BackgroundSlider>
    <Slider {...settings}>
      <div>
        <Styled.ServiceImg>
        </Styled.ServiceImg>
        <Styled.BackgroundServices>
          <li>Standard solution - Website non-functional</li>
          <li>User interface, SPA and redirecting to external sale conversions</li>
        </Styled.BackgroundServices>
        <ButtonShape>See More...</ButtonShape>
      </div>
      <div>
        <h3>Logotipo</h3>
        <ul>
          <li>Standard solution - Website non-functional</li>
          <li>User interface, SPA and redirecting to external sale conversions</li>
        </ul>
      </div>
    </Slider>
  </Styled.BackgroundSlider>
);
