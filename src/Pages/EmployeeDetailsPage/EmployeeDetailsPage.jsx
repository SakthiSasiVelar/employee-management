import { useParams } from "react-router-dom";
import useFilter from "../../Hooks/useFilter";
import EmployeeDetails from "../../Components/EmployeeDetails/EmployeeDetails";
import { useGetEmployees } from "../../Queries/employeeQueries";



function EmployeeDetailsPage(){
    const {employeeId} = useParams();
    const {data:employees} = useGetEmployees();
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

