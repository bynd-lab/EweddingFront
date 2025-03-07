import { InternalAxiosRequestConfig, AxiosHeaders } from 'axios';

export const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (!(config.headers instanceof AxiosHeaders)) {
      config.headers = new AxiosHeaders(config.headers);
    }
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
};

export const authRequestErrorInterceptor = (error: any) => {
  return Promise.reject(error);
}; 