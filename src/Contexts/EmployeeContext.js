import { createContext} from "react";
import { IMG_URL } from "../Utils/config";

const employees = [
    {
        id:1,
        name:"John",
        position:"Frontend Engineer",
        image_url:IMG_URL
    },

    {
        id:2,
        name:"Jacob",
        position:"Backend Engineer",
        image_url:IMG_URL
    },

    {
        id:3,
        name:"James",
        position:"Product Manager",
        image_url:IMG_URL
    },

    {
        id:4,
        name:"Ryan",
        position:"CEO",
        image_url:IMG_URL
    },
]

const EmployeeContext = createContext({
  initialEmployees : employees
});


export default EmployeeContext;
