import { useEffect, useState } from "react";
import axios from "axios";


export const Home = () => {
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created

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
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp">{emp.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">0</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">0</span>
          </div>
          <div>
            Total New: <span className="total_new">0</span>
          </div>
        </div>
      </>
    );
  };