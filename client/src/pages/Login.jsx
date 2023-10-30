import React from 'react'
import styles from './Login.module.css'
import Banner from '../components/Banner'
import LoginForm from '../components/LoginForm'



function Login() {
  return (
    <div className={styles.Login}>
      <LoginForm/>
      <Banner/>
    </div>
  )
}

export default Login