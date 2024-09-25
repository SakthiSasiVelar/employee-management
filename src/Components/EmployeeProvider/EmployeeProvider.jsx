import employeeReducer from "../../Reducers/EmployeeReducer";
import { useContext , useReducer } from "react";
import EmployeeContext from "../../Contexts/EmployeeContext";


function EmployeeProvider ({children}) {
    const employeeContext = useContext(EmployeeContext);
    const initialEmployees = employeeContext.initialEmployees;
    const [employees , dispatch] = useReducer(employeeReducer , initialEmployees);

    return(
        <EmployeeContext.Provider value={{employees , dispatch}}>
          {children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeProvider;