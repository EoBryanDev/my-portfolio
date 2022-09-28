import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import Ilustration from '../../assets/programming_image.svg';
import { Heading } from '../Heading';
import { Resume } from '../Resume---';

export const Introducing = ({ background }) => (

  <Styled.Story background={background}>
    <img src={Ilustration} alt="programming ilustration" />
    <Heading>Hi, I&apos;m Bryan. Nice to meet you!</Heading>
    <article>
      <p>
        I&apos;m a front end developer with passion in problem solving and user experiences.
      </p>
      <p>
        Over my first graduation, Physical Education, I practiced a hole skills and
        capacities in tech for improve my time and optimize my duties as a good coach.
        And then, I&apos;ve decided change up my professional career to tech because I could see
        that I could help many other people which want to improve your business, daily and way
        of doing things.
      </p>
      <p>
        Thus, I attached many courses in my experience and resumè,
        being them Web Developement Technician and I also have started Software
        Engeeniring Bacharelors.
      </p>
    </article>
    <Resume>Check out my resumè</Resume>
  </Styled.Story>
);

Introducing.propTypes = {
  background: P.bool.isRequired,
};
