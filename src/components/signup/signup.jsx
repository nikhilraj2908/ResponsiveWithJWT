import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export function Signup(){
    const [frmdata,setfrmdata]=useState({firstName:"",
        lastName:"",
        email:"",
        password:""
        })
    function handlechange(e){
        let name=e.target.name;
        let value=e.target.value;
        setfrmdata({...frmdata,[name]:value})
    }
    async function frmsubmit(e){
        e.preventDefault()
        console.log(frmdata); 
        const response=await axios.post("http://127.0.0.1:5000/signup",frmdata);
        console.log(response.data); 
        setfrmdata({
            firstName:"",
            lastName:"",
            email:"",
            password:""
        })
    }
    return(
        <>
            <div className="dashboard-bg text-light container-fluid d-flex justify-content-center align-items-center bg-secondary">
                <form onSubmit={frmsubmit} className="p-4 bg-dark rounded">
                    <dl>
                        <h3>Register Your Self</h3>
                        <dt>First Name</dt>
                        <dd><input onChange={handlechange} value={frmdata.firstName} required className="form-control" type="text" name="firstName" /></dd>
                        <dt>Last Name</dt>
                        <dd><input onChange={handlechange} value={frmdata.lastName}required className="form-control" type="text" name="lastName" /></dd>
                        <dt>Email</dt>
                        <dd ><input onChange={handlechange} value={frmdata.email} required className="form-control" type="email" name="email" ></input></dd>
                        <dt>Password</dt>
                        <dd><input onChange={handlechange}value={frmdata.password} required className="form-control" type="password" name="password"></input></dd>
                        <button className='btn btn-primary w-100 '>register user</button>
                    </dl>
                    <div className='text-center'><Link  className='text-light ' to="/">Go to dashboard</Link></div>
                </form>
                
            </div>
        </>
    )
}