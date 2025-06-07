import axios from 'axios';
import { getToken } from './tokenServiceServerSide';
interface IErorrs {
  field: string;
  message: string;
}
interface ApiResponsive {
  statusCode?: number;
  message: string | null;
  data?: any;
  pagination?: {
    totalPages: number;
    page: number;
    limit: number;
  }
  errors?: IErorrs[]
}

const URL_API = process.env.NEXT_PUBLIC_API_URL

const axiosClient = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",

  },
  timeout: 10000
});

axiosClient.interceptors.request.use(async config => {
  const { accessToken } = await getToken()
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken?.value}`;
  console.log('config.params', config.params);
  console.log('config.url', config.url);
  return config;
});
axiosClient.interceptors.response.use(
  async response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
)

export { axiosClient, type ApiResponsive };