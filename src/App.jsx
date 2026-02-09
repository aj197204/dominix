
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import OfferingsPage from '@/pages/OfferingsPage';
import WorkPage from '@/pages/WorkPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="offerings" element={<OfferingsPage />} />
          <Route path="work" element={<WorkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
