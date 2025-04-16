import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import'../component/Login_Style.css'




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
    <div className='container-fluid login_body d-flex justify-content-center align-items-center vh-100'>
' 
      <div className='card glass-card text-white p-4' style={{maxWidth:'500px',width:'100%'}} >
    <h2 className='card-title text-center'>Login Page</h2>
    <p className='card-text text-center'>Welcome back! Please log in.</p>

    <form onSubmit={handleSubmit}>
      <div className='form-group mb-3'>
        <label htmlFor="">E-Mail </label><br />
        <input type="email" className='form-control bg-transparent'  name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        </div>

        <div className='mb-3'>
        <label htmlFor="">Password </label><br />
        <input type="password" className='form-control bg-transparent' name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
        </div>

        <button className='login-btn' onClick={() => navigate("/")}>Login</button>
      </form>

      
      <p className=' text-black'>Don't have an account? </p>
      <button className='signup-btn' onClick={() => navigate("/signup")}>Signup</button>

    
    
      </div>

  </div>
  )
}

export default Login