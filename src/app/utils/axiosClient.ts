import axios from 'axios';
interface IErorrs {
  field: string;
  message: string;
}
interface ApiResponsive {
  statusCode: number;
  message: string;
  data?: any;
  errors?: IErorrs[]
}
const axiosClient = axios.create({
  baseURL: 'http://localhost:2504/api/v1',
  headers: { "Content-Type": "application/json" },
  timeout: 10000
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