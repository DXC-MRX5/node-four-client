import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
  // const [name, setName]=useState();
  // const [email, setEmail]=useState();
  // const [password, setPassword]=useState();
  const [conPassword, setConPassword]=useState();
  const [formData, setFormData]=useState({});
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleReg= async()=>{
    if(!formData.name || !formData.email || !formData.password){
      alert("All fields are required !");
    }
    else if(formData.password===conPassword){
      axios.post("https://hofour-server.onrender.com/api/main/register", formData)
      .then((response)=>{
        alert(response.data.message);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else alert("password dosen't match !")
  }
  return (
    <div className='register'>
        <h2>Register Yourself</h2>
        <div className='box'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={handleChange} required/>
        </div>
        <div className='box'>
            <label htmlFor='email'>Email Id</label>
            <input type='email' name='email' id='email' onChange={handleChange} required/>
        </div>
        <div className='box'>
            <label htmlFor='password'>Create Password</label>
            <input type='password' name='password' id='password' onChange={handleChange} required/>
        </div>
        <div className='box'>
            <label htmlFor='conPassword'>Confirm Password</label>
            <input type='password' name='conPassword' id='conPassword' onChange={(e)=>setConPassword(e.target.value)} required/>
        </div>
        <button className='Btn' onClick={handleReg}>Register</button>
    </div>
  )
}

export default Register