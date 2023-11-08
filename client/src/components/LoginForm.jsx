import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import styles from './LoginForm.module.css'
import axios from 'axios'
import { useState } from 'react'

function LoginForm() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:'',
    password:'',
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
    if(formData.email && formData.password){
      let dataToSend = {
        email: formData.email,
        password: formData.password,
      };
      console.log(dataToSend);
      try {
        const response = await axios.post('http://localhost:5000/login', dataToSend);
        console.log('login successful: ', response.data);
        localStorage.setItem('userData',JSON.stringify({name:response.data.name,token:response.data.token}))
        navigate('/');
      } 
      catch (error) {
        console.log('login Failed: ', error)
      }
    }
    else{
      console.log('All fields are mandatory');
    }

  }
  return (
    <div className={styles.LoginForm}>
      <div>Already have an account?</div>
      <p>Your personal job finder is here</p>
      
      <input type="email" placeholder='Email' name='email' onChange={handleFormData}/>
      
      <input type="password" placeholder='Password' name='password' onChange={handleFormData} />
      
      <button onClick={handleSubmit} style={{cursor:'pointer'}}>Sign in</button>
      <div>
        Don't have an account? &nbsp;
        <span style={{color:'black',textDecoration:'underline'}}>
          <Link to='/register'>Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default LoginForm