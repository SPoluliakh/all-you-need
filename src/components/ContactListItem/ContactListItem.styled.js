import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ListItemText = styled.p`
  margin: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.ml}px;
  text-align: center;
`;

export const ListItemBtn = styled.button`
  justify-content: start;
  margin-right: ${p => p.theme.space[2]}px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  transition: 250ms linear;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.deletButton};
  }
`;
