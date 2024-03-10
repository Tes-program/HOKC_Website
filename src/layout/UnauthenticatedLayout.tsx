/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const UnauthenticatedLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UnauthenticatedLayout;
