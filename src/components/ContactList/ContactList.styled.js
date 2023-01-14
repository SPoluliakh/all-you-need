import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const TotalContacts = styled.h3`
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
`;
