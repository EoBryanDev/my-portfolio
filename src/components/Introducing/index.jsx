import React from 'react';
import * as Styled from './styles';

import Ilustration from '../../assets/programming_image.svg';
import { Intro } from './mock';
import { Resume } from '../Resume---';

export const Introducing = () => (
  <>

    <Styled.Story>
      <img src={Ilustration} alt="programming ilustration" />
      <h1>{Intro.saudation}</h1>
      <article>
        <p>
          {Intro.fp}
        </p>
        <p>
          {Intro.sp}
        </p>
        <p>
          {Intro.tp}
        </p>
      </article>
    </Styled.Story>
    <div>
      <Resume>Check out my resumè</Resume>
    </div>
  </>

);
