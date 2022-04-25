import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";

export const EmployeeDetails = () => {
    const [employ,setEmploy] = useState({});
    const [task,setTask] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/employee/${id}`)
       .then(function (response) {
         // handle success
         setEmploy(response.data)
        console.log(response.data);
        console.log(response.data.tasks)
        setTask(response.data.tasks)
  })
    },[]);

    
    return (
      <div className="user_details">
        <img className="user_image" src={employ.image} />
        <h4 className="user_name">{employ.username}</h4>
        <span className="user_salary">${employ.salary}</span>
        <span className="tasks">
        <li className="task">{task[0]}</li>
        </span>
        Status: <b className="status">{employ.status}</b>
        Title: <b className="title">{employ.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };