import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
//  import { GlobalStyles } from '../../styles/global-styles';

function NotFound() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Column>
          <Styled.TextColumn>
            <Styled.Title>404 NOT FOUND</Styled.Title>
            <Styled.Subtitle>Ooops... I think you lost your spaceship!</Styled.Subtitle>
            <Styled.Button>
              <Link to="/">
                Go back to main page
              </Link>
            </Styled.Button>
          </Styled.TextColumn>
        </Styled.Column>
        <Styled.Column>
          <img src="https://cdn-icons-png.flaticon.com/512/2211/2211769.png" alt="astronault" className="astronault" />
        </Styled.Column>
      </Styled.Content>
    </Styled.Container>
  );
}

export default NotFound;
