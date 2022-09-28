import styled from 'styled-components';

export const Container = styled.div`


  h4{
    margin: ${({ theme }) => theme.spacings.margins.xlarge} 0;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const CheckOutMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    color: ${({ theme }) => theme.colors.whiteColor}
  }
`;
