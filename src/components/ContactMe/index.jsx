import React from 'react';
import * as Styled from './styles';
import { ButtonShape } from '../Button/index';

export const ContactMe = () => (
  <Styled.Container>
    <Styled.Ballon>
      <h2>Starting a Project</h2>
      <p>
        Insterested in working together?
        We should queue up a time to chat.
        I&apos;ll grab some coffee for us!
      </p>
      <Styled.TalkButton type="submit">
        <ButtonShape href="wa.me/5511949748768">Talk to me</ButtonShape>
      </Styled.TalkButton>
    </Styled.Ballon>
  </Styled.Container>
);
