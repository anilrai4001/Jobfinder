import React, { useState } from 'react'
import styles from './RegisterForm.module.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


function RegisterForm() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    agreed:false
  })

  const handleFormData = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]:value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(formData.name && formData.email && formData.mobile && formData.password && formData.agreed){
      let dataToSend = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
      };
      console.log(dataToSend);
      try {
        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.post(backendURL+'/register', dataToSend);
        console.log('Registration successful: ', response.data);
        localStorage.setItem('userData',JSON.stringify({name:response.data.name,token:response.data.token}))
        navigate('/');
      } 
      catch (error) {
        console.log('Registration Failed: ', error)
      }
    }
    else{
      alert('All fields are mandatory');
    }

  }
  


  return (
    <div className={styles.RegisterForm}>
      <div>Create an account</div>
      <p>Your personal job finder is here</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' onChange={handleFormData} />
        <input type="email" placeholder='Email' name='email' onChange={handleFormData} />
        <input type="number" placeholder='Mobile' name='mobile'  onChange={handleFormData} />
        <input type="password" placeholder='Password' name='password' onChange={handleFormData} />
        <label>
          <input type="checkbox" onChange={(e)=>setFormData({...formData, agreed: e.target.checked})} />
          By creating an account, I agree to our terms of use and privacy policy
        </label>
        <button type='submit' onClick={handleSubmit} style={{cursor:'pointer'}} >Create Account</button>
      </form>

      <div>
        Already have an account? &nbsp;
        <span style={{color:'black',textDecoration:'underline'}}>
          <Link to='/login'>Sign In</Link>
        </span>
      </div>
    </div>
  )
}

export default RegisterForm