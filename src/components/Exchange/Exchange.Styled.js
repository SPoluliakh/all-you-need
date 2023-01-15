import styled from 'styled-components';

export const ExchangeSection = styled.section`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const ExchangeLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.ml}px;
  color: ${p => p.theme.colors.mainText};
  text-shadow: ${p => p.theme.shadows.wrapShadow};
`;

export const ExchangeInput = styled.input`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  width: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  box-shadow: ${p => p.theme.shadows.wrapShadow};
  background-color: transparent;
`;

export const ExchangeSelect = styled.select`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  box-shadow: ${p => p.theme.shadows.wrapShadow};
  margin-left: ${p => p.theme.space[2]}px;
  background-color: transparent;
`;
