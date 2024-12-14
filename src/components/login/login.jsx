import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
export function Login() {
    const [user, setuser] = useState({});
    const[cookies,setcookie,removecookie]=useCookies(["authtoken"])
    const navigate = useNavigate();
    function handlechange(e) {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }
    async function frmsubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', user);
            if (res.status === 200) {
                setcookie("authtoken", res.data.token);
                alert("login succefully");
                navigate("/mainpage")
            }
        }
        catch (err) {
            alert("login failed");
            console.log(err);
        }
    }
    return (
        <div className="h-100 text-light container-fluid d-flex justify-content-center align-items-center" >
            <form className="p-4 bg-dark rounded" onSubmit={frmsubmit} >
                <dl>
                    <h3>Login As User</h3>
                    <dt>email</dt>
                    <dd ><input onChange={handlechange} placeholder="enter your email" className="form-control" type="text" name="email" /></dd>
                    <dt>password</dt>
                    <dd><input onChange={handlechange} placeholder="enter your password" className="form-control" type="password" name="password"></input></dd>
                    <button className="w-100 btn btn-success">login user</button>
                </dl>
                <div>forgot password ?<Link to="/forgotpassword"> Reset Now</Link></div>
                <div className="text-center"><Link className="text-light" to="/">Go to dashbord</Link></div>
            </form>
        </div>
    )
}