import styled from 'styled-components';
import { Button } from '@mui/material';

export const WelcomeText = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LogOutButton = styled(Button)`
  padding: ${p => p.theme.space[0]}px;
  display: inline-block;
  min-width: 40px;
  height: 20px;

  @media (min-width: 768px) {
    min-width: 60px;
    height: 30px;
  }
`;
