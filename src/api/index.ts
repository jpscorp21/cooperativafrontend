import {
  authInterceptor,
  responseInterceptor,
  errorInterceptor
} from './interceptors';
import axios from 'axios';

export const BASE_URL = "http://localhost:5000/api/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
})

api.interceptors.request.use(authInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;