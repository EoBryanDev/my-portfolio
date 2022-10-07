import React from 'react';
import { ButtonShape } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const ContactMe = () => (
  <Styled.Container>
    <Styled.Ballon>
      <Heading>Starting a Project</Heading>
      <p>
        Insterested in working together?
        We should queue up a time to chat.
        I&apos;ll buy the coffee
      </p>
      <ButtonShape>Visit</ButtonShape>
    </Styled.Ballon>
  </Styled.Container>
);
