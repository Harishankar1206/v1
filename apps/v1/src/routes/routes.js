import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../app/components/home';
import Notfound from '../app/components/notfound';

export const AppRoute = () => {
  return (
    <BrowserRouter basename="/v1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/not-found' element={<Notfound />} />
        <Route path="*" element={<Navigate to='/not-found' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};
