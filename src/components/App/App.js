import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from '../../Pages/HomePage/HomePage';

const WeatherPage = lazy(() =>
  import('../../Pages/Weather/WeatherPage').then(module => ({
    ...module,
    default: module.WeatherPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="weather" element={<WeatherPage />} />
      </Route>
    </Routes>
  );
};
