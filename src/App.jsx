import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppLayout from './components/layout/AppLayout';

import ExplorePage from './pages/ExplorePage';
import PackagesPage from './pages/PackagesPage';
import StatusPage from './pages/StatusPage';
import DownloadsPage from './pages/DownloadsPage';
import ProfilePage from './pages/ProfilePage';

import './App.css';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<ExplorePage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="status" element={<StatusPage />} />
            <Route path="downloads" element={<DownloadsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
