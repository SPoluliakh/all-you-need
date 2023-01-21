import styled from 'styled-components';
import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
  transition: 300ms linear;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ml}px;
  }

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &.active {
    color: ${p => p.theme.colors.headerBcg};
  }

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.logoColor};
    scale: 0;
    transition: 300ms linear;
  }

  :hover::after,
  :focus::after {
    background-color: ${p => p.theme.colors.headerBcg};
    scale: 1;
  }

  &.active::after {
    background-color: ${p => p.theme.colors.headerBcg};
    scale: 1;
  }
`;

export const Wrap = styled(Toolbar)`
  display: flex;
  flex-direction: column;
`;
