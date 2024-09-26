import React, { useState } from 'react';
import Styles from "./AddEmployeeForm.module.css"

const AddEmployeeForm = ({handleFormSubmit , handleCancel}) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function resetFields(){
     setFormData({
        name: '',
        age: '',
        position: ''
     })
   }

   function validateFields(employeeDetails){
     if(employeeDetails.name == '' || employeeDetails.age == '' || employeeDetails.position == '')return false;
     return true;      
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateFields(formData))alert("All the fields are required");
    else{
        let newFormData = formData;
        resetFields();
        handleFormSubmit(newFormData);
    }
  };



  const handleFormCancel = (e) =>{
    e.preventDefault()
    resetFields();
    handleCancel();
  }

  return (
    <form onSubmit={handleSubmit} className={Styles.container}>
      <div >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={Styles.input_box}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className={Styles.input_box}
        />
      </div>
      <div>
        <select name="position" value={formData.position} onChange={handleChange} className={Styles.input_box}>
          <option  disabled value=''>Select the position</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Product Manager">Product Manager</option>
        </select>
      </div>
      <div className={Styles.btn_container}>
      <button type="submit" className={`${Styles.button} ${Styles.submit_button}`}>Submit</button>
      <button type="button" onClick={handleFormCancel} className={`${Styles.button} ${Styles.cancel_button}`}>Cancel</button>
      </div> 
    </form> 
  ); 
};

export default AddEmployeeForm;
