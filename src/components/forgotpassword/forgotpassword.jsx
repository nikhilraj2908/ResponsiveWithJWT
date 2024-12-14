import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export function Forgotpassword() {
    const [userdata, setuserdata] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    // const[emailtext,setemailtext]=useState("");
    const navigate = useNavigate()
    function handlechange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setuserdata({ ...userdata, [name]: value });
    }
    async function frmsubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://127.0.0.1:5000/forgot-password", userdata)
            alert("reset link sent to your mail id");
           
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Email not found");
            } else {
                alert("An error occurred. Please try again.");
            }
        }
        finally {
            setuserdata({email: "" });
            setLoading(false);
        }
    }
    return (
        <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
            <form className="bg-dark p-4 rounded" onSubmit={frmsubmit}>
                <dl className="text-light">
                    <h3>Reset Password</h3>
                    <dt>Your mail-Id</dt>
                    <dd>
                        <input className="form-control" value={userdata.email} placeholder="Registered email" onChange={handlechange} type="email" name="email" ></input>
                    </dd>
                    <button
                        className="w-100 btn btn-success"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <div
                                className="spinner-border spinner-border-sm text-light"
                                role="status"
                            >
                                
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </dl>
                <div className="text-center text-light">Go back to <Link to="/">dashbord</Link></div>
            </form>
        </div>
    )
}