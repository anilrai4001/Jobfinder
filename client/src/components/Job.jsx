import React from 'react'
import styles from './Job.module.css'
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'
import people from '../assets/people.png'
import { Link } from 'react-router-dom'

function Job() {
  return (
    <div className={styles.Job}>
      <div className={styles.leftcontainer}>
        <div className={styles.logo}>
          <img src={logo} alt='company logo' />
        </div>
        <div className={styles.jobData}>
          <div className={styles.jobRole}>Frontend Developer</div>
          <div className={styles.jobPay}>
            <div>
              <img src={people} alt='group of people' /><span>11-50</span>
            </div>
            <div>
              &#8377;<span>50,000</span>
            </div>
            <div>
              <img src={flag} alt='Indian flag' /><span>Delhi</span>
            </div>
          </div>
          <div className={styles.jobType}>
            <span>Office</span>
            <span>Full time</span>
          </div>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.skills}>
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>html</span>
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>html</span>
         
        </div>
        <div className={styles.button}>
          <Link to='/job/id' className={styles.link} style={{ border:'3px solid #ED5353',color:'#ED5353'}}>Edit Job</Link>
          <Link to='/job/id' className={styles.link} style={{backgroundColor:'#ED5353'}}>View details</Link>
        </div>
      </div>


    </div>
  )
}

export default Job