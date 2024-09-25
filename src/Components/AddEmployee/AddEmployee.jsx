import { FaPlus } from "react-icons/fa6";
import Styles from "./AddEmployee.module.css"
import { Modal} from "antd"
import { useContext, useState } from "react";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";
import { v4 as uuidv4 } from "uuid";
import EmployeeContext from "../../Contexts/EmployeeContext";
import { IMG_URL } from "../../Utils/config";

const AddEmployee = () => {
    const [isModalOpen , setIsModalOpen ] = useState(false);
    const {dispatch} = useContext(EmployeeContext);

    function handleModalOpen(){
        setIsModalOpen(true);
    }

    function handleFormSubmit(employeeData){
        let newEmployee = {...employeeData , id:uuidv4(),image_url:IMG_URL}
        dispatch({type:'ADD_EMPLOYEE',payload:newEmployee})
        setIsModalOpen(false);
    }

    function handleCancel(){
        setIsModalOpen(false);
    }



  return (
    <div className={Styles.container} >
        <FaPlus onClick={handleModalOpen}/>
        <p>Add Employee</p>
        <Modal open={isModalOpen} footer={null}  onCancel={handleCancel}>
         <h1>Add Employee</h1>
         <AddEmployeeForm  handleFormSubmit={handleFormSubmit} handleCancel={handleCancel} />
        </Modal>
    </div>
  )
}

export default AddEmployee