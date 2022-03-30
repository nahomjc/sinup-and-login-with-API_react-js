import React from 'react';
import { useState,useEffect,useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import './Form1.css';

const SignUp = () => {

  const[first_name,setFirst_Name]=useState('')
  const[last_name,setLast_Name]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[re_password,setRe_password]=useState('')
  const[country,setCountry]=useState('')
  const[birth,setBirth]=useState('')
  const[phone,setPhone]=useState()
  const[app_user,setApp_user]=useState([])
 

  const handleClick=(e)=>{
    e.preventDefault()
    const app_user={first_name,last_name,email,re_password,password,country,phone,birth}
    console.log(app_user)
    fetch("http://localhost:8080/api/v1/registration",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(app_user)

  }).then(()=>{
    console.log("New Student added")
  })
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
       
        <form className="form">
        <h1>
         Sign Up
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Phone Numer</label>
          <PhoneInput

            international
            countryCallingCodeEditable={false}
            defaultCountry="ET"
            value={phone}
            onChange={setPhone}/>
          
        </div>
        <div className='form-inputs'>
        {/* country */}
        <FontAwesomeIcon icon="globe" />
        <label className='form-label'>Country List</label>
        
         
       
       
        
        
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="user"/>     
          <label className='form-label'>First Name</label>
         
          <input
            className='form-input'
            type='text'
            name='first_name'
            placeholder='Enter your first_name'
            value={first_name}
            onChange={(e)=>setFirst_Name(e.target.value)}
          />
                   
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="user"/>     
          <label className='form-label'>Last Name</label>
         
          <input
            className='form-input'
            type='text'
            name='last_name'
            placeholder='Enter your last_name'
            value={last_name}
            onChange={(e)=>setLast_Name(e.target.value)}
          />
                   
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="envelope"/>  
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
         
        </div>
        <div className='form-inputs'>
          <span className='form-input-icon'><FontAwesomeIcon icon="calendar" className="hover:text-red-500" /></span>
        
        <label className='form-label'>Birthdate</label>
        <input type='date'
        className='form-input'
         placeholder='Enter BirthDate'
         value={birth} onChange={(e)=>setBirth(e.target.value)}
          name='birthdate'
    />
         
        </div>
      
        <div className='form-inputs'>
        <FontAwesomeIcon icon="lock"/> 
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
         
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="lock"/> 
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='re_password'
            placeholder='Confirm your password'
            value={re_password}
            onChange={(e)=>setRe_password(e.target.value)}
          />
          
        </div>
        
        <div className='form-inputs'>
        
        </div>
        <button className='form-input-btn' type='submit' onClick={handleClick}>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
