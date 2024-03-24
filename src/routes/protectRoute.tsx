/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { useContext } from 'react';
import { Navigate, NavigateProps, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext) as AuthContextType;
  const location = useLocation();
  const state = location.state as NavigateProps['state'];

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: state?.from?.pathname || '/' }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
