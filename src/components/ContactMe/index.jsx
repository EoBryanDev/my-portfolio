import React from 'react';
import * as Styled from './styles';
//  import { ButtonShape } from '../Button/index';

export const ContactMe = () => (
  <Styled.Container>
    <Styled.Ballon>
      <h2>Starting a Project</h2>
      <p>
        Insterested in working together?
        We should queue up a time to chat.
        I&apos;ll grab some coffee for us!
      </p>
      <Styled.TalkButton type="submit">Talk to me</Styled.TalkButton>
    </Styled.Ballon>
  </Styled.Container>
);
