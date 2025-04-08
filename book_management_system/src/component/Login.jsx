import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"




function Login() {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      // Handle input change
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Logged In:", formData);
         // Redirect to dashboard after login (Change as needed)
      };
  return (
    <div>
    <h2>Login Page</h2>
    <p>Welcome back! Please log in.</p>
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
        <button onClick={() => navigate("/")}>Login</button>
      </form>

      
      Don't have an account? 
      <button onClick={() => navigate("/signup")}>Signup</button>

    
    
    
  </div>
  )
}

export default Login