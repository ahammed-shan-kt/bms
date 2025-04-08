import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: "",
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
        console.log("User Signed Up:", formData);
        navigate("/login"); // Redirect to login page after signup
      };
  return (
    <div>

        <form onSubmit={handleSubmit}>
        <input ype="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
        <button type="submit">Sign Up</button>
      </form>
           Already have an account? <button onClick={() => navigate("/login")}>Login</button>   
      </div>



        

  )
}

export default Signup