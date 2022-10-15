import styled from 'styled-components';

export const Container = styled.div`


  h4{
    margin: ${({ theme }) => theme.spacings.margins.xlarge} 0;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
    color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.whiteColor)}
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

`;

export const CheckOutMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.lightColor)}

`;
