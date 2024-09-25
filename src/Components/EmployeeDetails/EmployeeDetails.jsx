import Styles from "./EmployeeDetails.module.css"
import MapComponent from "../Map/Map";

function EmployeeDetails({id , name , position}){
    return (
        <div className={Styles.container}>
            <h1>Employee Details</h1>
            <p>Employee Id : {id}</p>
            <p>Employee Name : {name}</p>
            <p>Employee Position : {position}</p>
            <MapComponent lat={51.505} long={-0.09} />
        </div>
    )
}


export default EmployeeDetails;