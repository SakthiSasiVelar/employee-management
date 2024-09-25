import { useParams } from "react-router-dom";
import useFilter from "../../Hooks/useFilter";
import { useContext } from "react";
import EmployeeContext from "../../Contexts/EmployeeContext";
import EmployeeDetails from "../../Components/EmployeeDetails/EmployeeDetails";



function EmployeeDetailsPage(){
    const {employeeId} = useParams();
    const {employees } = useContext(EmployeeContext);
    const employee = useFilter(employees , employeeId);

    return (
            employee ? 
                <div>
                    <EmployeeDetails {...employee}/>
                </div>
            :
            <div>
                Invalid Id
            </div>
    )
}

export default EmployeeDetailsPage;

