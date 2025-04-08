import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../component/Signup_styl.css'
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
    <div className='container-fluid signup_body d-flex justify-content-center align-items-center vh-100'>
       <div className='card glass-card text-white p-4' style={{maxWidth:'500px',width:'100%'}}>
       <h2 className='card-title text-center'>Create a new Account</h2>

        <form onSubmit={handleSubmit}>
          <div  className='mb-3'>
          <label htmlFor="">Full Name </label><br />
        <input ype="text"  className='form-control bg-transparent' name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className='mb-3'>
        <label htmlFor="">Phone</label><br />
        <input type="email"  className='form-control bg-transparent' name="phn" placeholder="Phone" value={formData.Phone} onChange={handleChange} required/>
        </div>

        <div className='mb-3'>
        <label htmlFor="">E-mail</label><br />
        <input type="email"  className='form-control bg-transparent' name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required/>
        </div>
        
        <div className='mb-3'>
        <label htmlFor="">Password</label><br />
        <input type="password"  className='form-control bg-transparent' name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
        </div>

        <div className='mb-3'>
        <label htmlFor=""> Confirm Password</label><br />
        <input type="password"  className='form-control bg-transparent' name="Cpassword" placeholder="Confirm Password" value={formData.Cpassword} onChange={handleChange}/>
        </div>

        <button className='signup-btn' type="submit">Sign Up</button>
      </form>
          <p>Already have an account? </p>
          <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
           </div>   
      </div>



        

  )
}

export default Signup