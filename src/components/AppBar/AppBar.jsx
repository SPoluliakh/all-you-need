import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import * as SC from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <SC.Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </SC.Header>
    </>
  );
};
