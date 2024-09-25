import AddEmployee from "../AddEmployee/AddEmployee";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./Header.module.css"

function Header(){
    return (
      <div className={Styles.container}>
         <h1>Employee Management</h1>
         <div className={Styles.right_container}>
            {/* <SearchBar /> */}
            <AddEmployee />
         </div>
         
      </div>
    )
}

export default Header;