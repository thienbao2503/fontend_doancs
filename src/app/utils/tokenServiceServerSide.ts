"use server"
import { cookies as serverCookies } from 'next/headers';

export const setToken = async (accessToken: string, refreshToken: string) => {
  // Server-side (sử dụng next/headers) - không có cấu hình bổ sung
  const cookieStore = await serverCookies();
  cookieStore.set('accessToken', accessToken);
  cookieStore.set('refreshToken', refreshToken);
};

export const getToken = async () => {
  // Server-side (sử dụng next/headers)
  const cookieStore = await serverCookies();
  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');
  return { accessToken, refreshToken };
};
