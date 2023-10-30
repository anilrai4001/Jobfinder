import React from 'react';
import styles from './Register.module.css';
import RegisterForm from '../components/RegisterForm';
import Banner from '../components/Banner';

function Register() {
  return (
    <div className={styles.Register}>
      <RegisterForm />
      <Banner />
    </div>
  );
}

export default Register;