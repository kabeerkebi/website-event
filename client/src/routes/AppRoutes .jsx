// src/routes/AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Loader from '../components/common/Loader';

// Lazy load page components
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const RegisterPage  = lazy(() => import('../pages/RegisterPage '));

const AppRoutes = () => (
  
  <Router>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);

export default AppRoutes;
