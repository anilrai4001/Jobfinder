import React from 'react'
import styles from './JobBanner.module.css'
import bannerImg from '../assets/jobBanner.png'

function JobBanner() {
  return (
    <div className={styles.JobBanner}>
      <img src={bannerImg} alt='random design' />
      <div className={styles.bannerTitle}>Recruiter add job details here</div>
    </div>
  )
}

export default JobBanner