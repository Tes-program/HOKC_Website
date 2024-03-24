/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../utils/Auth';

export const useRefreshToken = () => {
  const baseUrl = process.env.BACKEND_URL as string;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshToken = async () => {
    setIsRefreshing(true);

    try {
      const refreshToken = getRefreshToken();
      const response = await axios.post(`${baseUrl}/auth/refresh-token`, {
        refreshToken,
      });
      setAccessToken(response.data.token.access.token);
      setRefreshToken(response.data.token.refresh.token);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  };
  useEffect(() => {
    const handleUnauthorized = async () => {
      if (!isRefreshing) {
        await refreshToken();
      }
    };

    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401 && !isRefreshing) {
          await handleUnauthorized();
          return axios.request(error.config);
        }
        throw error;
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [isRefreshing]);

  return { isRefreshing };
};
