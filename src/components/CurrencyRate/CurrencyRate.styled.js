import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  justify-content: center;
`;

export const Wrap = styled.div`
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;
  height: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[5]}px;
  text-align: center;
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.wrapShadow};
  background-color: transparent;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-top: 0;
  color: ${p => p.theme.colors.text};
`;

export const Rate = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m}px;
  margin: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.text};
`;
