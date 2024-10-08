import employeeService from "../Api/Services/employeeService";

export const getEmployees = async () => {
    try{
        const response = await employeeService.getAllEmployees();
        return response.data ; 
    }
    catch(error){         
        throw error;
    }
}


export const postEmployee = async (postData) => {
    try{
        const response = await employeeService.addEmployee(postData);
        return response.data;
    }
    catch(error){
        throw error;
    }
}