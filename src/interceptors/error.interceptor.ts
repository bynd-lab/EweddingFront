import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export const errorResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const errorResponseErrorInterceptor = (error: any) => {
  const message = error.response?.data?.message || 'An error occurred';
  toast.error(message);
  return Promise.reject(error);
}; 