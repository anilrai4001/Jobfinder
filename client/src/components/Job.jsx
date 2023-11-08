import React, {useEffect} from 'react'
import styles from './Job.module.css'
import logo from '../assets/logo.png'
import flag from '../assets/flag.png'
import people from '../assets/people.png'
import { Link } from 'react-router-dom'

function Job({data,loggedin,setLoggedin}) {

  useEffect(() => {
      const userData = window.localStorage.getItem('userData');
      if (!userData) {
          setLoggedin(false);
      }
      else {
          setLoggedin(true);
      }
  }, [setLoggedin])

  return (
    <div className={styles.Job}>
      <div className={styles.leftcontainer}>
        <div className={styles.logo} >
          <img src={data.logo_url} alt='company logo' defaultValue={logo} />
        </div>
        <div className={styles.jobData}>
          <div className={styles.jobRole}>{data.job_position}</div>
          <div className={styles.jobPay}>
            <div>
              <img src={people} alt='group of people' /><span>11-50</span>
            </div>
            <div>
              &#8377;<span>{data.monthly_salary}</span>
            </div>
            <div>
              <img src={flag} alt='Indian flag' /><span>{data.location}</span>
            </div>
          </div>
          <div className={styles.jobType}>
            <span>{data.remote_or_office}</span>
            <span>{data.job_type}</span>
          </div>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.skills}>
          {data.skills_required.split(',').map((ele)=><span>{ele}</span>)}
   
        </div>
        <div className={styles.button}>
          {loggedin?
          <Link to={'/editjob/'+data._id}   className={styles.link} style={{ border:'3px solid #ED5353',color:'#ED5353'}}>Edit Job</Link>
            :
            null
        }
          <Link to={'/jobdescription/'+data._id} className={styles.link} style={{backgroundColor:'#ED5353'}}>View details</Link>
        </div>
      </div>


    </div>
  )
}

export default Job