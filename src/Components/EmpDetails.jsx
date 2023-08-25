import React, { useEffect, useState } from "react";
import { useParams ,Link,  useLocation
} from "react-router-dom";

const EmpDetails = () => {
  const location = useLocation()
  console.log("windows =>",location)

  const params = useParams();
  console.log();
  const [empdata, setEmpData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/employee/`+params.id)
      .then((res) => {
        console.log("resp",res);
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Deatils</h1>
      {empdata && (
        <div>
           <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
          <h3>Contact Details</h3>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Phone is : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
        </div>
      )}
    </div>
  );
};

export default EmpDetails;
