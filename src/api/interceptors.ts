import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { TokenResponse } from "../models/auth-model";

/** 
 * 
 * Interceptors
 * 
 */

export interface IApiResponse<T> extends AxiosResponse<T> {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export const baseUrlInterceptor = (config: AxiosRequestConfig) => {
  // const servidorApi = store.state.config.servidorApi;
  // console.log(servidorApi);
  // console.log(localStorage.getItem('estrella-servidor-api'))
  // config.baseURL = `http://${servidorApi}/api`;
  return config;
};

export const authInterceptor = (config: AxiosRequestConfig) => {

  const estrellaJSON = localStorage.getItem('estrella');  

  if (!estrellaJSON) {
    return config;
  }

  
  const estrella: TokenResponse = JSON.parse(estrellaJSON);    

  config.headers['Authorization'] = 'Bearer ' + estrella.token;
  return config;
};

// Interceptores de Respuesta
export const errorInterceptor = (error: AxiosError) => {  

  // Ver el tema del error

  if (!error.response) {
    // snackbarErrorMessage('Problemas de conexión a internet');
    return Promise.reject(error);
  }

  console.log(error);

  switch (error.response.status) {
    case 400:
      // snackbarErrorMessage('Consulta no encontrada');
      console.error(error.response.status, error.message);
      // notify.warn('Nothing to display','Data Not Found');
      break;

    case 401: // authentication error, logout the user
      // notify.warn( 'Please login again', 'Session Expired');

      // router.push('/auth');
      // snackbarErrorMessage(
      //   'Problemas de autenticación. Vuelva a iniciar sesión'
      // );
      break;
    case 422: // authentication error, logout the user
      // notify.warn( 'Please login again', 'Session Expired');
      // router.push('/auth');
      // snackbarErrorMessage('Algunos campos están sin completarse');
      break;
    case 500:
      // snackbarErrorMessage('Error en el servidor. Vuelva a intentarlo');
      // Snackbar.open({
      //   message: 'Error en el servidor',
      //   position: 'is-top-right',
      //   type: 'is-warning',
      //   actionText: 'Aceptar',
      //   duration: 3000,
      // });
      break;
    default:
      console.error(error.response.status, error.message);

    // notify.error('Server Error');
  }
  return Promise.reject(error);
};

export const responseInterceptor: any = (response: IApiResponse<any>) => {

  // ver el tema de response
  console.log({
    data: response.data,
    url: response.config.url,
    status: response.status,    
    headers: response.headers,
  });

  switch (response.status) {
    case 200:
      if (response.headers['x-pagination']) {
        response.headers['x-pagination'] = JSON.parse(
          response.headers['x-pagination']
        );
        response.totalCount = response.headers['x-pagination'].totalCount;
        response.totalPages = response.headers['x-pagination'].totalPages;
        response.currentPage = response.headers['x-pagination'].currentPaeg;
        response.pageSize = response.headers['x-pagination'].pageSize;
      }
      break;
    case 201:
      break;
    case 204:
      break;
    default:
    // default case
  }
  return response;
};

