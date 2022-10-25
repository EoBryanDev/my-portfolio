/* eslint-disable react/jsx-no-constructed-context-values */
import { Anchor } from 'antd';
import React from 'react';
import P from 'prop-types';

import { IconContext } from 'react-icons';
import { BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/bs';

import * as Styled from './styles';
import { ButtonShape } from '../Button';
import { Heading } from '../Heading';
import profilePicLight from '../../assets/me_lightMode.png';
import profilePicDark from '../../assets/me_darkMode.png';
/*  //live.staticflickr.com/65535/52441955023_4783f05112_z.jpg  */
const pageSize = window.innerWidth;
const { Link } = Anchor;

export const HomeSection = ({ theme }) => (
  <Styled.Container>
    <Styled.MeContainer>
      <Styled.TextContainer>
        <Heading colorDark>I DESIGN AND CODE SMART SOLUTIONS FOR YOU,</Heading>
        <Heading colorDark>AND I&apos;M</Heading>
        <div className="wrapper">
          <div className="words">
            <span><h1>TECH LOVER.</h1></span>
            <span><h1>TECH LOVER.</h1></span>
            <span><h1>OPTIMIST.</h1></span>
            <span><h1>WHOOPER.</h1></span>
            <span><h1>PLUVIOPHILE.</h1></span>
          </div>
        </div>
        <h4>
          That&apos;s great when you really like to help each
          other and also you know how to do this with tech
        </h4>

        {pageSize >= 834
          ? (
            <Styled.ButtonContainer>
              <ButtonShape background href="https://tinyurl.com/EoBryanDev">Let&apos;s Talk...</ButtonShape>
              <Anchor targetOffset="50">
                <Link href="#section5" title="Portfolio" className="portfolio" />
              </Anchor>
            </Styled.ButtonContainer>
          )
          : ''}
      </Styled.TextContainer>
      <Styled.ImgContainer>
        <img src={theme.name === 'dark' ? profilePicLight : profilePicDark} alt="avatar" className="profile" />
        <Styled.Bloob />
      </Styled.ImgContainer>
      {pageSize < 834
        ? (
          <Styled.ButtonContainer>
            <ButtonShape background href="https://tinyurl.com/EoBryanDev">Let&apos;s Talk...</ButtonShape>
            <Anchor targetOffset="50" className="portfolio">
              <Link href="#section5" title="Portfolio" />
            </Anchor>
          </Styled.ButtonContainer>
        )
        : ''}
    </Styled.MeContainer>
    <Styled.CheckOutMe>
      <p>Check Out Me: </p>
      <IconContext.Provider value={{ size: '20px', className: 'react-icons' }}>
        <a href="https://www.instagram.com/yolo.bryan/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
        <a href="https://github.com/EoBryanDev" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href="https://tinyurl.com/EoBryanDev" target="_blank" rel="noopener noreferrer">
          <BsWhatsapp />
        </a>
      </IconContext.Provider>
    </Styled.CheckOutMe>
  </Styled.Container>

);

HomeSection.propTypes = {
  theme: P.string.isRequired,
};
