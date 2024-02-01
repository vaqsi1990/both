

import Navbar from '../parts/Navbar'
import React, { useContext } from 'react'
import "./login.css";
import { useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4500/login", credentials);

      if (res.data.isAdmin) {
        navigate('/');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar />
    <div className='login'>
      <div className="lContainer">
        <input type="text" id="name" name='name' placeholder='name' onChange={handleChange} className="LInput" />
        <input type="password" id="password" placeholder='password' onChange={handleChange} className="LInput" />
        <button onClick={handleClick} className="lButton">Login</button>
        <p>dont have an account? <Link to='/register' className='reg'>Register</Link></p>
      </div>
    </div>
  </>
  );
}

