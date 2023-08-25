import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams ,useLocation} from 'react-router-dom';

const EmpEdit = () => {
    const[id,idChange]=useState();
    const[name,nameChange]=useState();
    const[email,emailChange]=useState();
    const[phone,phoneChange]=useState();
    const[active,activeChange]=useState();
    const location = useLocation()
    console.log("windows =>",location)
    const navigate=useNavigate();
    
    const params = useParams();
    // const [empdata, setEmpData] = useState({});
  
    useEffect(() => {
      fetch("http://localhost:8000/employee/"+params.id)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
         idChange(resp.id);
         nameChange(resp.name);
         emailChange(resp.email);
         phoneChange(resp.phone);
         activeChange(resp.active);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const empdata={id,name,email,phone,active};
        // console.log({name,email,phone,active});
        fetch('http://localhost:8000/employee/'+params.id,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(empdata)
        }).then((res)=>{
         alert("Successfully Editdata")
         navigate('/');
        }).catch((err)=>{
            console.log(err.message);
        })
    }

  return (
    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-title">
                        <h2 style={{textAlign:'center'}}>Employee Edit</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Id</label>
                                    <input className='form-control' disabled='disabled' value={id}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input required  value={name} onChange={e=>nameChange(e.target.value)} className='form-control'/>
                                    {name?.length==0 && <span className='text-danger'>Name is mandatory</span>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input value={email} onChange={e=>emailChange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <input value={phone} onChange={e=>phoneChange(e.target.value)} className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">
                                    <input type='checkbox' checked={active} onChange={e=>activeChange(e.target.value)} className='form-check-input'/>
                                    <label htmlFor="" className='form-check-label'>Is Active</label>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className='btn btn-success m-3' type='submit'>Save</button>
                                    <Link to='/' className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
  )
}

export default EmpEdit
