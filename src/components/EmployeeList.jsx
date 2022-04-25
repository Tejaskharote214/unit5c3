import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [emp,setEmp] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/employee')
       .then(function (response) {
         // handle success
         setEmp(response.data)
        console.log(response.data);
  })
    },[])
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {emp.map((e,i)=>(
            <div className="employee_card" key={e.id} >
                <Link to={`/employee/${e.id}`}>
            <img  className="employee_image" src={e.image} />
            <span className="employee_name" >{e.employee_name}</span>
            <span className="employee_title" >{e.title}</span>
            </Link>
          </div>
        ))}
      </div>
    );
  };