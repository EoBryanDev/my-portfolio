/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IconContext } from 'react-icons';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import Slider from 'react-slick';
import Test from '../../assets/Test.png';

import * as Styled from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { portFolio } from './mock';
import { ButtonShape } from '../Button';
import { Heading } from '../Heading';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export const PortFolio = () => (
  <>
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
                <ButtonShape type="submit">Visit</ButtonShape>
                {item.techs.map((itens) => (
                  <img src={itens.url} alt={itens.alt} key={itens.id} />
                ))}
              </Styled.ProjectNav>
            </div>
          ))}
        </Slider>
      </Styled.SliderContainer>
    </Styled.Container>
    <Styled.GridWrapper>
      <Heading>What I&apos;ve been working on</Heading>
      <div className="grid-wrapper">
        {portFolio.map((item) => (
          <>
            <div className={item.gridType} key={item.id}>
              <img src={item.urlBack} alt={item.alt} />
              <div className="overlay">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="buttons">
                    <IconContext.Provider value={{ size: '35%', className: 'react-icons' }}>
                      <a href="w"><BsGithub /></a>
                      <a href="w"><BsBoxArrowUpRight /></a>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        {/* portFolio.map((item) => (
          <div key={item.id}>
            {item.id % 2 === 0 ? (
              <div className="wide">
                <img src={Test} alt={item.id} />
              </div>
            ) : (
              <div className="tall">
                <img src={Test} alt={item.id} />
              </div>
            )}
          </div>
        )) */}
      </div>
    </Styled.GridWrapper>

  </>
);
