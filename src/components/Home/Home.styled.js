import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;
export const Wrap = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  @media (min-width: 768px) {
    width: 420px;
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ml}px;
  }
`;
