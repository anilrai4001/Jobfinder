import React from 'react'
import styles from './AddJob.module.css'
import JobForm from '../components/JobForm'
import JobBanner from '../components/JobBanner'

function  AddJob() {
  return (
    <div className={styles.AddJob} >
        <JobForm />
        <JobBanner />
    </div>
  )
}

export default  AddJob