import { useNavigate } from "react-router-dom";
import Styles from "./EmployeeCard.module.css"

function EmployeeCard({name , id , image_url}){
  const navigate = useNavigate();

  function handleViewDetails(e){
    e.preventDefault();
     navigate(`/employee/${id}`)
  }
  return (
    <div className={Styles.container}>
       <img src={image_url} alt="photo" className={Styles.image}/>
        <p className={Styles.name}>{name}</p>
        <button onClick={handleViewDetails} className={Styles.view_details_btn}>View Details</button>
    </div>
  )
}

export default EmployeeCard