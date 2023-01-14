import { Navigation } from 'components/Navigation/Navigation';

import * as SC from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <SC.Header>
        <Navigation />
      </SC.Header>
    </>
  );
};
