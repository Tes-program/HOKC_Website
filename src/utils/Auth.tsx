import Cookies from 'js-cookie';

export const setAccessToken = (token: string | null) => {
  if (token) {
    sessionStorage.setItem('accessToken', token);
  } else {
    sessionStorage.removeItem('accessToken');
  }
};

export const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};

export const setRefreshToken = (token: string) => {
  Cookies.set('refreshToken', token, {
    sameSite: 'strict',
    secure: true,
    httpOnly: true,
  });
};

export const getRefreshToken = () => {
  return Cookies.get('refreshToken');
};

export const removeRefreshToken = () => {
  Cookies.remove('refreshToken');
};
