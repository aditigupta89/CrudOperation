import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const EmpCreate = () => {
    const[id,idChange]=useState();
    const[name,nameChange]=useState();
    const[email,emailChange]=useState();
    const[phone,phoneChange]=useState();
    const[active,activeChange]=useState();

    const navigate=useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active};
        // console.log({name,email,phone,active});
        fetch('http://localhost:8000/employee',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(empdata)
        }).then((res)=>{
         alert("Successfully")
         navigate('/');
        }).catch((err)=>{
            console.log(err.message);
        })
    }

  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-title">
                        <h2 style={{textAlign:'center'}}>Employee Create</h2>
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
                                    <input type='checkbox' value={active} onChange={e=>activeChange(e.target.value)} className='form-check-input'/>
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
    </>
  )
}

export default EmpCreate
