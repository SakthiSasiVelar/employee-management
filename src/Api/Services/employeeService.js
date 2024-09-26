import axiosInstance from "../axiosInstance";

const employeeService = {
    getAllEmployees : ()=>{
       return axiosInstance.get('/employees') ;
    },
    addEmployee : (postData)=>{
        return axiosInstance.post('/employees' , postData);
    }
}

export default employeeService;