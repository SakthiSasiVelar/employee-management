import AddEmployee from "../AddEmployee/AddEmployee";
import Styles from "./Header.module.css"

function Header(){
    return (
      <div className={Styles.container}>
         <h1>Employee Management</h1>
         <div className={Styles.right_container}>
            <AddEmployee />
         </div>
         
      </div>
    )
}

export default Header;