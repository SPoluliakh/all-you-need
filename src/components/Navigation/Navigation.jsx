import { useAuth } from 'components/hooks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <nav>
        <SC.Link to="/">Home</SC.Link>
        <SC.Link to="weather">Weather</SC.Link>

        {isLoggedIn && <SC.Link to="phoneBook">Phone book</SC.Link>}
      </nav>
    </>
  );
};
