import { FaPlus } from "react-icons/fa6";
import Styles from "./AddEmployee.module.css"
import { Modal} from "antd"
import { useContext, useState } from "react";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";
import { v4 as uuidv4 } from "uuid";
import EmployeeContext from "../../Contexts/EmployeeContext";
import { useAddEmployee } from "../../Queries/employeeQueries";
import { IMAGE_URL, LATITUDE, LONGITUDE } from "../../Utils/config";

const AddEmployee = () => {
    const [isModalOpen , setIsModalOpen ] = useState(false);
    const {mutateAsync} = useAddEmployee();
    const {dispatch} = useContext(EmployeeContext)

    function handleModalOpen(){
        setIsModalOpen(true);
    }

    async function handleFormSubmit(employeeData){
        let newEmployee = {
            ...employeeData , 
            id:uuidv4(),
            image_url:IMAGE_URL,
            latitude:LATITUDE,
            longitude:LONGITUDE
        }
        const postData = JSON.stringify(newEmployee);
        dispatch({type:'ADD_EMPLOYEE' , payload:newEmployee})
        await mutateAsync(postData);
        setIsModalOpen(false);
    }

    function handleCancel(){
        setIsModalOpen(false);
    }



  return (
    <div className={Styles.container} >
        <FaPlus onClick={handleModalOpen}/>
        <p >Add Employee</p>
        <Modal open={isModalOpen} footer={null}  onCancel={handleCancel}>
         <h1 className={Styles.title}>Add Employee</h1>
         <AddEmployeeForm  handleFormSubmit={handleFormSubmit} handleCancel={handleCancel} />
        </Modal>
    </div>
  )
}

export default AddEmployee