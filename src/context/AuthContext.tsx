// contexts/AuthContext.js
import { createContext, useState, useEffect } from 'react';
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
const baseUrl = process.env.BACKEND_URL;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isRefreshing } = useRefreshToken();

  useEffect(() => {
    const baseUrl = process.env.BACKEND_URL;
    const checkAuthentication = async () => {
      try {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        if (accessToken && refreshToken) {
          // Verify the tokens on the server-side
          const response: boolean = await axios.post(
            `${baseUrl}/auth/verify-tokens`,
            {
              accessToken,
              refreshToken,
            }
          );

          if (response.valueOf() === true) {
            setIsAuthenticated(true);
          } else {
            // Tokens are invalid, log out the user
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
    setAccessToken(' ');
    removeRefreshToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
