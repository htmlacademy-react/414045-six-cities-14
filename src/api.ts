import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://14.react.pages.academy/six-cities';
const DEFAULT_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});
