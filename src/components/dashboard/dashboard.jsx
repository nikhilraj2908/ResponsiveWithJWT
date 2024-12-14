import { useNavigate } from "react-router-dom"
// import './dashboard.css';
export function Dashboard(){
    const navigate=useNavigate();
    function loginbtnclick(){
        navigate("/loginpage");
    }
    function signupbtnclick(){
        navigate("/signuppage");
    }
    return (
        <>
            <div className="dashboard-bg d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <button onClick={loginbtnclick} className="me-3 btn btn-success">Login User</button>
                <button onClick={signupbtnclick} className="btn btn-warning">Signup user</button>
            </div>
        </>
    )
}