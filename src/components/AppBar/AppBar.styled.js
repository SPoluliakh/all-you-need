import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.headerBorder};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
`;
