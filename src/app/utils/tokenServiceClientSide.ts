// utils/tokenService.ts
import Cookies from 'js-cookie';

export const setToken = (accessToken: string, refreshToken: string) => {
  // Client-side (sử dụng js-cookie) - không có cấu hình bổ sung
  Cookies.set('accessToken', accessToken, { path: '/' });
  Cookies.set('refreshToken', refreshToken, { path: '/' });
};

export const getToken = () => {
  const accessToken = Cookies.get('accessToken') || '';
  const refreshToken = Cookies.get('refreshToken') || '';
  if (!accessToken) {
    console.log('No access token found');
  }
  return { accessToken, refreshToken };
};
