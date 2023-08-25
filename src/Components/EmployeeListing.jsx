import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListing = () => {
  const [empdata, setEmpData] = useState(null);
  const navigate = useNavigate();
  
  const LoadDelete = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:8000/employee/" + id, {
          method: "DELETE"
      }).then((res) => {
          alert('Removed successfully.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
  };
  const LoadEdit = (id) => {
    navigate("/empedit/" + id);
  };
  const LoadDetails = (id) => {
    navigate("/empdetails/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
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
    <>
      <div className="container">
        <div className="card">
          <div className="title">
            <h2 style={{textAlign:'center'}}>Employee Listing</h2>
          </div>
          <div className="card-body">
            <div>
              <Link to="/empcreate" className="btn btn-success">
                Add New+
              </Link>
            </div>
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata?.map((item,i) => (
                    <tr key={item.id}>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <a
                          className="btn btn-primary m-2 text-white "
                          onClick={() => {
                            LoadDetails(item.id);
                          }}
                        >
                          Details
                        </a>
                        <a
                          className="btn btn-danger m-2 text-white "
                          onClick={() => {
                            LoadDelete(item.id);
                          }}
                        >
                          Delete
                        </a>
                        <a
                          className="btn btn-success m-2 text-white"
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                 </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListing;
