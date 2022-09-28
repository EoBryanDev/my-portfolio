import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { ButtonShape } from '../Button';

export const HomeSection = ({ background }) => (
  <Styled.Container background={background}>
    {/* Componentizar estes ele mentos */}
    <h1>I DESIGN AND CODE SMART SOLUTIONS FOR YOU,</h1>
    <h1> AND I LOVE IT.</h1>
    <h2>Lorem ipsum wht bbq jodjod</h2>
    <img srcSet="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" style={{ width: '100%' }} />
    <Styled.ButtonContainer>
      <ButtonShape>Let&apos;s Talk...</ButtonShape>
      <ButtonShape background={false}>Portfolio</ButtonShape>
    </Styled.ButtonContainer>
    <p>Check Out Me: Instagram , Github , Whatsapp</p>
  </Styled.Container>
);

HomeSection.propTypes = {
  background: P.bool.isRequired,
};
