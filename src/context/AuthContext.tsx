/* eslint-disable react-hooks/exhaustive-deps */
// contexts/AuthContext.js
import React, { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  setAccessToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
} from '../utils/Auth';
import { useRefreshToken } from '../hooks/useRefreshToken';
import { Login, TokenPayload } from '../interfaces/authInterface';

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (credentials: Login) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
export type AuthContextType = AuthContextValue;

const baseUrl = import.meta.env.VITE_BACKEND_URL as string;

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isRefreshing } = useRefreshToken();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        if (accessToken && refreshToken) {
          const response: boolean = await axios.post(
            `${baseUrl}/auth/verify-tokens`,
            {
              accessToken,
              refreshToken,
            }
          );

          if (response) {
            setIsAuthenticated(true);
          } else {
            logout();
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to verify authentication:', error);
        setIsAuthenticated(false);
      }
    };

    void checkAuthentication();
  }, [isRefreshing]);

  const login = async (credentials: Login) => {
    try {
      const response: TokenPayload = await axios.post(
        `${baseUrl}/auth/login`,
        credentials
      );
      setAccessToken(response.access.token);
      setRefreshToken(response.refresh.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };

  const logout = () => {
    setAccessToken('');
    removeRefreshToken();
    setIsAuthenticated(false);
  };

  const authContextValue = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
