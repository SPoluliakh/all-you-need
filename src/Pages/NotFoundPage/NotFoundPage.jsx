import { NoInfo } from 'components/NoInfo/NoInfo';
import * as SC from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <SC.Wrap>
      <NoInfo />
      <p>Opsss this page does not exist...</p>
      <SC.Link to="/"> Go home page </SC.Link>
    </SC.Wrap>
  );
};
