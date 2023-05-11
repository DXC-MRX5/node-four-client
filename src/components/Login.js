import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [dataBtn, setDataBtn]=useState(false);
  const [logData, setLogData]=useState({});
  const handleChange=(e)=>{
    setLogData({...logData, [e.target.name]:e.target.value});
  }
  const handleLog=()=>{
    if(!logData.email || !logData.password){
      alert("All fields are required !");
    }
    else{
      axios.post("https://hofour-server.onrender.com/api/main/login", logData)
      .then((response)=>{
        console.log(response.data);
        alert(response.data.message);
        const token = response.data.Token;
        if (token){
          localStorage.setItem('receivedToken', token);
          console.log('token saved to LocalStorage');
          setDataBtn(!dataBtn);
        }
      })
      .catch((err)=>{
        console.log(err.message);
      })
    }
  }
  const handleSee=()=>{
    const tkn = localStorage.getItem('receivedToken')
    axios.get("https://hofour-server.onrender.com/api/main/getData", {
      headers:{
        "Authorization": 'Bearer '+ tkn
      }
    })
    .then((response)=>console.log(response.data))
    .catch((err)=>console.log(err))
  }
  return (
    <>
    <div className='logForm'>
        <h2>Log In</h2>
        <div className='box'>
            <label htmlFor='email'>Email Id</label>
            <input type='email' name='email' id='email' onChange={handleChange} required/>
        </div>
        <div className='box'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' onChange={handleChange} required/>
        </div>
        <button className='Btn' onClick={handleLog}>Log In</button>
    </div>
    {dataBtn ? <><button onClick={handleSee} className='Btn' style={{marginTop:"20px"}}>See Data</button><br/><p style={{color:"aliceblue", fontSize:'12px'}}>you can check all registered user in the console.</p></>
    : null}
    </>
  )
}

export default Login