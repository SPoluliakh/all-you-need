import styled from 'styled-components';
import { Button } from '@mui/material';

export const RegisterForm = styled.form`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const InputArea = styled.input`
  font-size: ${p => p.theme.fontSizes.m}px;
  padding: ${p => p.theme.space[1]}px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  width: 200px;

  @media (min-width: 768px) {
    width: 400px;
  }

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const LabelArea = styled.label`
  font-size: ${p => p.theme.fontSizes.m}px;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ml}px;
  }

  cursor: pointer;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const RegisterButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
