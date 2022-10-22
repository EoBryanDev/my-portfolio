/* eslint-disable react/jsx-no-constructed-context-values */
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

export const HomeSection = ({ theme }) => (
  <Styled.Container>
    <Styled.MeContainer>
      <Styled.TextContainer>
        <Heading colorDark>I DESIGN AND CODE SMART SOLUTIONS FOR YOU,</Heading>
        <Heading colorDark>AND I LOVE IT.</Heading>
        <h4>
          That&apos;s great when you really like to help each
          other and also you know how to do this with tech
        </h4>
        {pageSize >= 834
          ? (
            <Styled.ButtonContainer>
              <ButtonShape background>Let&apos;s Talk...</ButtonShape>
              <ButtonShape background={false}>Portfolio</ButtonShape>
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
            <ButtonShape background>Let&apos;s Talk...</ButtonShape>
            <ButtonShape background={false}>Portfolio</ButtonShape>
          </Styled.ButtonContainer>
        )
        : ''}
    </Styled.MeContainer>
    <Styled.CheckOutMe>
      <p>Check Out Me: </p>
      <IconContext.Provider value={{ size: '20px', className: 'react-icons' }}>
        <BsInstagram />
        <BsGithub />
        <BsWhatsapp />
      </IconContext.Provider>
    </Styled.CheckOutMe>
  </Styled.Container>
);

HomeSection.propTypes = {
  theme: P.string.isRequired,
};
