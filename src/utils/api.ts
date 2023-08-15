import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import { toast } from 'react-toastify';

import { cookies } from './cookies';

enum StatusCode {
  InternalServerError = 500,
  TooManyRequests = 429,
  Success = 200 || 300,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ValidationError = 422,
}

type CustomErrorResponse = {
  message: string;
  errors: string[];
};

class Api {
  init(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.request.use(
      (config) => {
        try {
          const newCofig = config;
          // Append token
          const token = cookies.getCookie('@token');
          if (token && newCofig?.headers) {
            newCofig.headers.Authorization = `Bearer ${token}`;
          }
          return newCofig;
        } catch (error) {
          throw new Error(String(error));
        }
      },
      (error) => Promise.reject(error)
    );
    axiosInstance.interceptors.response.use(
      (response): any => {
        return response.data;
      },
      (error) => this.handleError(error)
    );
    return axiosInstance;
  }

  private handleError(error: AxiosError<CustomErrorResponse>) {
    const { response, message } = error;
    if (!response?.data) toast.error(message);
    else if (response?.status === StatusCode.InternalServerError)
      toast.error('There is InternalServerError');
    else if (response?.status === StatusCode.TooManyRequests)
      toast.error('TooManyRequests, Please try again later');
    else if (typeof response?.data.message === 'string')
      toast.error(response?.data.message);
    else {
      let errorText: string = '';
      Object.entries(response?.data.errors).forEach(([_, value]) => {
        if (Array.isArray(value)) {
          value.forEach((_error: string) => {
            errorText += `${_error} \n`;
          });
        }
      });
      toast.error(String(errorText));
    }
    return Promise.reject(error);
  }
}

const api = new Api().init(
  axios.create({ baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1` })
);
export { api };
