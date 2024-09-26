import Styles from "./EmployeeDetails.module.css"
import MapComponent from "../Map/Map";

function EmployeeDetails({id , name , position , latitude , longitude}){
    return (
        <div className={Styles.container}>
            <h1>Employee Details</h1>
            <p>Employee Id : {id}</p>
            <p>Employee Name : {name}</p>
            <p>Employee Position : {position}</p>
            <MapComponent lat={latitude} long={longitude} />
        </div>
    )
}


export default EmployeeDetails;