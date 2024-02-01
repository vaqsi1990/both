
import Navbar from '../parts/Navbar'
import React, { useState, useContext } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import "./register.css";



export default function Signup() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
   

    try {
      const res = await axios.post("http://localhost:4500/register", userData);
     
      navigate('/login'); 
    } catch (err) {
   
    }
  };

  return (

    <>
    <Navbar />
    <div className='register'>
      <div className="lContainer">
        <input type="text" placeholder='name' id='name' onChange={handleChange} className="LInput" />
        <input type="email" placeholder='email' id='email' onChange={handleChange} className="LInput" />
        <input type="password" placeholder='password' id='password' onChange={handleChange} className="LInput" />
        <button  onClick={handleRegister} className="lButton">Register</button>
      
      </div>
    </div>
    </>
  )
}
