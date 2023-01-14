import styled from 'styled-components';
import { Button } from '@mui/material';

export const AddFormWrap = styled.div`
  border: ${p => p.theme.borders.contactForm};
  padding: ${p => p.theme.space[3]}px;
  width: 220px;

  @media (min-width: 768px) {
    padding: ${p => p.theme.space[5]}px;
    width: 400px;
  }
`;

export const ContactFrm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FormInput = styled.input`
  margin-top: ${p => p.theme.space[2]}px;
`;

export const FormBtn = styled(Button)`
  min-width: 100px;
  margin: 0 auto;
  cursor: pointer;
  padding: ${p => p.theme.space[1]}px;
  transition: box-shadow 150ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.buttonsShadow};
  }
`;
