import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthenticatedLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;
