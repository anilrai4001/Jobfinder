import React from 'react'
import styles from './EditJob.module.css'
import EditJobForm from '../components/EditJobForm'
import JobBanner from '../components/JobBanner'

function  EditJob() {

  return (
    <div className={styles.EditJob} >
        <EditJobForm />
        <JobBanner />
    </div>
  )
}

export default  EditJob