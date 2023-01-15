import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const FormInput = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  width: ${p => p.theme.space[8]}px;
  border-top-left-radius: ${p => p.theme.radii.sadVew};
  border-bottom-left-radius: ${p => p.theme.radii.sadVew};
  border-top-right-radius: ${p => p.theme.radii.sadVew};
  border-bottom-right-radius: ${p => p.theme.radii.sadVew};
  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, Caveat, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: ${p => p.theme.fontSizes.ml}px;
  }
`;

export const FormButton = styled.button`
  padding: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: transparent;
  cursor: pointer;

  color: ${p => p.theme.colors.headerBcg};

  position: absolute;
  top: ${() => '7px'};
  left: ${p => {
    if (p.type === 'submit') {
      return '4px';
    }
  }};
  right: ${p => {
    if (p.type === 'button') {
      return '7px';
    }
  }};

  transition: scale 250ms linear;
  :hover {
    scale: 1.2;
  }
`;
