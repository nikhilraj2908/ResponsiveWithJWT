import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

export function Resetpassword() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const location = useLocation();
//   const history = useHistory();

useEffect(() => {
    const pathParts = location.pathname.split("/"); 
    const tokenFromPath = pathParts[pathParts.length - 1]; 
    if (tokenFromPath) {
      setToken(tokenFromPath);
    } else {
      setError("Invalid or missing reset token.");
    }
  }, [location]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/reset-password", {
        token,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status === 200) {
        setMessage("Password reset successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  }

  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
      <form className="p-4 bg-dark text-light rounded shadow" onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Reset Password</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            className="form-control"
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter your new password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your new password"
            required
          />
        </div>

        <button className="btn btn-success w-100 mb-3">Change Password</button>

        <div className="text-center">
          <Link to="/" className="text-light">Go back to Dashboard</Link>
        </div>
      </form>
    </div>
  );
}
