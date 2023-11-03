import React from 'react'
import styles from './Main.module.css'
import Navbar from '../components/NavBar'
import Filter from '../components/Filter'
import Job from '../components/Job'

function Main() {
  return (
    <div className={styles.Main}>
      <Navbar />
      <Filter />
      <div style={{ width: '100%'}}>
        <Job />
      </div>

    </div>
  )
}

export default Main