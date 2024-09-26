import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import applyResponseInterceptor from "./Interceptors/applyResponseInterceptor";
import applyRequestInterceptor from "./Interceptors/applyRequestInterceptor";


const axiosInstance = axios.create({
    baseURL:API_BASE_URL,
});

applyRequestInterceptor(axiosInstance);
applyResponseInterceptor(axiosInstance);

export default axiosInstance;