import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/authOperations';
import { useAuth } from 'components/hooks/useAuth';
import { Box } from '@mui/material';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box display="flex" alignItems="center">
      <SC.WelcomeText>Welcome,{user.name} </SC.WelcomeText>
      <SC.LogOutButton
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </SC.LogOutButton>
    </Box>
  );
};
