import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;
