import React, { useState } from 'react'
import styles from './JobForm.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function JobForm() {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        company_name: '',
        logo_url: '',
        job_position: '',
        monthly_salary: '',
        job_type: '',
        remote_or_office: '',
        location: '',
        job_description: '',
        about_company: '',
        skills_required: '',
        additional_information: ''
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleCancel = () => {
        navigate('/jobs');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            company_name,
            logo_url,
            job_position,
            monthly_salary,
            job_type,
            remote_or_office,
            location,
            job_description,
            about_company,
            skills_required,
            additional_information
        } = formDetails;
        console.log(formDetails);
        if (company_name !== '' && logo_url !== '' && job_position !== '' && monthly_salary !== '' && job_type !== '' && remote_or_office !== '' && location !== '' && job_description !== '' && about_company !== '' && skills_required !== '' && additional_information !== '') {
            try {
                const userData = JSON.parse(window.localStorage.getItem("userData"));
                const token = userData.token;
                const name = userData.name;
                
                if(!token){
                    alert("Login to create a job")
                    return;
                }
                const data = {...formDetails, name}
                const response = await axios.post('http://localhost:5000/job',data,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                      }
                });
                if(!response){
                    alert('Some error occured while creating job');
                    return;
                }
                console.log('Job Created Successfully', response.data);
                navigate('/jobs');
            }
            catch (error) {
                console.log('Job Creation failed',error);
            }
        }
        else {
            alert('All feilds are mandatory');
        }
    }


    return (
        <div className={styles.JobForm}>
            <div className={styles.title}>Add job description</div>
            <div className={styles.form}>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Company Name</span>
                    <input name='company_name' type='text' className={styles.inputs} placeholder='Enter your company name here' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Add logo URL</span>
                    <input name='logo_url' type='text' className={styles.inputs} placeholder='Enter the link' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Job position</span>
                    <input name='job_position' type='text' className={styles.inputs} placeholder='Enter job position' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Monthly salary</span>
                    <input name='monthly_salary' type='number' className={styles.inputs} placeholder='Enter Amount in rupees' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span  className={styles.inputName}>Job Type</span>
                    <select name='job_type' className={styles.select} onChange={handleChange}>
                        <option default >Select</option>
                        <option value="Full Time" >Full Time</option>
                        <option value="Part Time" >Part Time</option>
                    </select>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Remote/Office</span>
                    <select name='remote_or_office' className={styles.select} onChange={handleChange} >
                        <option default >Select</option>
                        <option value="Remote" >Remote</option>
                        <option value="Office" >Office</option>
                    </select>
                </label>

                <label className={styles.labels}>
                    <span className={styles.inputName}>Location</span>
                    <input name='location' type='text' className={styles.inputs} placeholder='Enter Location' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Job Description</span>
                    <textarea name='job_description' className={styles.inputs} placeholder='Type the job description' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>About Company</span>
                    <textarea name='about_company' className={styles.inputs} placeholder='Type about your company' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Skills Required</span>
                    <input name='skills_required' type='text' className={styles.inputs} placeholder='Enter the must have skills' onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Information</span>
                    <input name='additional_information' type='text' className={styles.inputs} placeholder='Enter the additional information' onChange={handleChange} />
                </label>



            </div>
            <div className={styles.buttons}>
                <div onClick={handleCancel} >Cancel</div>
                <div onClick={handleSubmit} >+ Add Job</div>
            </div>
        </div>
    )
}

export default JobForm