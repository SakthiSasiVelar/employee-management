import { useContext } from "react";
import EmployeeContext from "../../Contexts/EmployeeContext";
import Styles from "./EmployeeContainer.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

function EmployeeContainer(){
    const {employees} = useContext(EmployeeContext);
    return (
        <div className={Styles.container}>
           {
            employees.map((employee) =>{
                return (
                    <EmployeeCard key={employee.id} {...employee} />
                )
            })
           }
        </div>
    )
}

export default EmployeeContainer;