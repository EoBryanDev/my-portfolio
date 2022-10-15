import React from 'react';
import * as Styled from './styles';

import Ilustration from '../../assets/programming_image.svg';

export const Introducing = () => (
  <Styled.Story>
    <img src={Ilustration} alt="programming ilustration" />
    <h1>Hi, I&apos;m Bryan. Nice to meet you!</h1>
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
  </Styled.Story>
);
