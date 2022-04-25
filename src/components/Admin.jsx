import axios from "axios";
import { useState } from "react";

export const Admin = () => {
    const [formdata,setFormdata] = useState({
      "employee_name": "",
      "employee_id": "",
      "title": "",
      "salary": "",
      "image": "",
      "username": "",
      "password": "",
      "tasks": [],
      "status": "",
      "team": ""
    })

    function onchanges(e){
        setFormdata({...formdata,[e.target.name]:e.target.value});
        console.log(e.target.name,e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch("http://localhost:8080/employee",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(formdata)
    });
    }
    return (
      <form className="createEmployee" onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" name="employee_name" onChange={(e)=>{onchanges(e)}} />
        <input type="text" placeholder="Employee id" name="employee_id" onChange={(e)=>{onchanges(e)}} />
        <select name="title" onChange={(e)=>{onchanges(e)}}>
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input type="number" placeholder="Salary" name="salary" onChange={(e)=>{onchanges(e)}} />
        <input type="text" placeholder="Image" name="image" onChange={(e)=>{onchanges(e)}} />
        <input type="text" placeholder="User Name" name="username" onChange={(e)=>{onchanges(e)}}/>
        <input type="password" placeholder="Password" name="password" onChange={(e)=>{onchanges(e)}}/>
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks" onChange={(e)=>{onchanges(e)}}
        />
        <select name="status" id="status" onChange={(e)=>{onchanges(e)}}>
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select name="team" id="team" onChange={(e)=>{onchanges(e)}}>
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };