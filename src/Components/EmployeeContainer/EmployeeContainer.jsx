import { useContext, useEffect } from "react";
import EmployeeContext from "../../Contexts/EmployeeContext";
import Styles from "./EmployeeContainer.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { useGetEmployees } from "../../Queries/employeeQueries";
import Header from "../Header/Header";

function EmployeeContainer(){
    const {data:employees} = useGetEmployees();
    const {dispatch} = useContext(EmployeeContext);
    
    useEffect(()=>{
        if(employees?.length > 0) dispatch({type:'COPY_EMPLOYEE', payload:employees})
    },[])

    return (
        <div className={Styles.container}>
           {
            !isError && employees?.map((employee) =>{
                return (
                    <EmployeeCard key={employee.id} {...employee} />
                )
            })
           }
        </div>
    )
}

export default EmployeeContainer;