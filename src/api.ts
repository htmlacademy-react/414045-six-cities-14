import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {getToken} from './services/token-service.ts';
import {StatusCodes} from 'http-status-codes';
import {store} from './store';
import {clearError, setError} from './store/error/error-slice.ts';
import {SHOW_TIME_ERROR} from './consts.ts';

type DetailErrorType = {
  error: string;
}

const BASE_URL = 'https://14.react.pages.academy/six-cities';
const DEFAULT_TIMEOUT = 5000;

const ErrorRuleForStatusCode: Record<number, boolean> = {
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true
};

const shouldShowError = (response: AxiosResponse) => !!ErrorRuleForStatusCode[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use((response) => response, (error: AxiosError<DetailErrorType>) => {
    if (error.response && shouldShowError(error.response)) {
      const detailMessage = (error.response.data);

      store.dispatch(setError({error: detailMessage.error}));

      setTimeout(() => {
        store.dispatch(clearError());
      }, SHOW_TIME_ERROR);

      throw error;
    }
  });

  return api;
};
