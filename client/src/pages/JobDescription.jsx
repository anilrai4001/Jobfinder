import React, { useEffect, useState } from 'react'
import styles from './JobDescription.module.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function JobDescription() {
    const [jobData,setJobData] = useState({});
    const [skills, setSkills] = useState([]);
    const [loggedin, setLoggedin] = useState(false);

    const currentURL = window.location.href;
    const id = currentURL.split('/').pop();

    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/job/` + id);
            setJobData(response.data.data);
            setSkills(response.data.data.skills_required.split(',').map((ele)=><span>{ele}</span>))
            console.log(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();

        const userData = window.localStorage.getItem('userData');
        if (!userData) {
            setLoggedin(false);
        }
        else {
            setLoggedin(true);
        }
        
      }, [id, setLoggedin]);

    return (
        <div className={styles.JobDescription}>
            <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
            <div className={styles.pageHeading}>
                <div className={styles.container}>
                    {jobData.job_position} {jobData.remote_or_office} job/internship at {jobData.company_name}
                </div>
            </div>



            <div className={styles.details}>
                <div style={{ color: '#999999' }}>{jobData.job_type}</div>
                <div style={{ fontSize: '35px', fontWeight: '700' }}>{jobData.job_position}</div>
                <div style={{ color: '#ED5353' }}>{jobData.location} | India</div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <span>Stipend</span>
                        <span>{jobData.monthly_salary}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <span>Duration</span>
                        <span>6 months</span>

                    </div>
                </div>
                <div style={{ fontSize: '18px', color: 'black', fontWeight: '700' }}>About company</div>
                <div>{jobData.about_company}</div>
                <div style={{ fontSize: '18px', color: 'black', fontWeight: '700' }}>About the  job/internship</div>
                <div>{jobData.job_description}</div>
                <div style={{ fontSize: '18px', color: 'black', fontWeight: '700' }}>Skill(s) required</div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {skills}
                    
                    
                </div>
                <div style={{ fontSize: '18px', color: 'black', fontWeight: '700' }}>Additional Information</div>
                <div>{jobData.additional_information}</div>

            {
                loggedin
                ?
                <div style={{ backgroundColor: '#ED5353', borderRadius: '6px', fontSize: '18px', fontWeight: 700, color: 'white', padding: '10px 20px', width: '130px', position: 'absolute', top:'80px',right:'30px',textAlign:'center',cursor:'pointer'}} onClick={()=>{navigate('/editjob/'+id)}}>Edit Job</div>
                :
                null
            }

            </div>


        </div >
    )
}

export default JobDescription