import styled from 'styled-components';

export const Title = styled.h2`
  margin-right: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const FindArea = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  width: 200px;
`;
