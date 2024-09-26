import axios from 'axios';


const applyRequestInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
} 
export default applyRequestInterceptor;
