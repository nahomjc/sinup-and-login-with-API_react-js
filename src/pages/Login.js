import React from 'react';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import './Form.css';

const Login = () => {

  const history=useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>
{
  if(localStorage.getItem("user-info")){
      history.pushState("/about")
  }
},[])
async function login(){
  console.warn(username.password)
  const users={username,password}
  
  let item={username,password};
  let result= await fetch("http://localhost:8080/api/auth/signin",{
      method:'POST',
      headers:{

          'Content-Type':'application/json',
          "Accept":"application/json"
         
      },
      body:JSON.stringify(item)
      
  })
  
  result =await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/about")
}

  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      
        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/bazra.svg' alt='.' />
        </div>
 <div className="form" >
        <h2>Sign In</h2>

    
        <div className="form-inputs">
        
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="username"
            name="username"
            placeholder="Enter your email"
  
            onChange={(e) => setUsername(e.target.value)}
          />

          
        </div>
        <div className="form-inputs">
       
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
          
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="form-input-login1">
            <a href="#">Forgot password?</a>
          </span>
        </div>
       

        <div className="form-inputs"></div>
        <button className="form-input-btn"  onClick={login}>
          Login in
        </button>
        <span className="form-input-login">
          Dont't Hava an account? Register <a href="#">here</a>
        </span>
      </div>
      

    </div>
    </div>
  );
};

export default Login;
