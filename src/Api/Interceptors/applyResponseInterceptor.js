

const applyResponseInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use((response) =>{
        return response;
    },
    (error) => {
        if(error.message == 'Network Error'){
            alert('Network error or wrong API URL. Please check your connection or URL.');
        }
        return Promise.reject(error);
    }
)
}

export default applyResponseInterceptor;