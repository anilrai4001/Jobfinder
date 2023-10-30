import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LoginForm.module.css'

function LoginForm() {
  return (
    <div className={styles.LoginForm}>
      <div>Already have an account?</div>
      <p>Your personal job finder is here</p>
      
      <input type="email" placeholder='Email' name='email'/>
      
      <input type="password" placeholder='Password' name='password' />
      
      <button>Sign in</button>
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