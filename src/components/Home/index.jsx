/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import { IconContext } from 'react-icons';
import { BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/bs';

import * as Styled from './styles';
import { ButtonShape } from '../Button';
import { Heading } from '../Heading';

export const HomeSection = () => (
  <Styled.Container>
    <Heading>I DESIGN AND CODE SMART SOLUTIONS FOR YOU,</Heading>
    <Heading>AND I LOVE IT.</Heading>
    <h4>
      That&apos;s great when you really like to help each
      other and also you know how to do this with tech
    </h4>
    <img srcSet="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" style={{ width: '100%' }} />
    <Styled.ButtonContainer>
      <ButtonShape>Let&apos;s Talk...</ButtonShape>
      <ButtonShape background={false}>Portfolio</ButtonShape>
    </Styled.ButtonContainer>
    <Styled.CheckOutMe>
      <p>Check Out Me: </p>
      <IconContext.Provider value={{ size: '20px' }}>
        <BsInstagram />
        <BsGithub />
        <BsWhatsapp />
      </IconContext.Provider>
    </Styled.CheckOutMe>
  </Styled.Container>
);
