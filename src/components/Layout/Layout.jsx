import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as SC from './Layout.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <SC.Wrap>
      <Box className="container">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <ToastContainer autoClose={3000} />
    </SC.Wrap>
  );
};
