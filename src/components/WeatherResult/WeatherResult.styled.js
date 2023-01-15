import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl}px;
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.ml}px;
`;
