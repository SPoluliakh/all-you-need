import styled from 'styled-components';
import { Button } from '@mui/material';

export const AddBtn = styled(Button)`
  min-width: 60px;
  transition: box-shadow 150ms linear;
  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.buttonsShadow};
  }
`;
