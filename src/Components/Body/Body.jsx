
import EmployeeContainer from "../EmployeeContainer/EmployeeContainer";
import Styles from "./Body.module.css"


function Body(){
    return (
        <div className={Styles.container}>
           <EmployeeContainer />
        </div>
        
    )
}

export default Body;