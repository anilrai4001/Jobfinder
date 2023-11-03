import React from 'react'
import styles from './JobForm.module.css'

function JobForm() {
    return (
        <div className={styles.JobForm}>
            <div className={styles.title}>Add job description</div>
            <div className={styles.form}>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Company Name</span>
                    <input type='text' className={styles.inputs} placeholder='Enter your company name here'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Add logo URL</span>
                    <input type='text' className={styles.inputs} placeholder='Enter the link'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Job position</span>
                    <input type='text' className={styles.inputs} placeholder='Enter job position'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Monthly salary</span>
                    <input type='number' className={styles.inputs} placeholder='Enter Amount in rupees'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Job Type</span>
                    <select className={styles.select} >
                        <option default >Select</option>                    
                        <option value="Full Time" >Full Time</option>                    
                        <option value="Part Time" >Part Time</option>                    
                    </select>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Remote/Office</span>
                    <select className={styles.select} >
                        <option default >Select</option>                    
                        <option value="Remote" >Remote</option>                    
                        <option value="Office" >Office</option>                    
                    </select>
                </label>
                
                <label className={styles.labels}>
                    <span className={styles.inputName}>Location</span>
                    <input type='text' className={styles.inputs} placeholder='Enter Location'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Job Description</span>
                    <textarea className={styles.inputs} placeholder='Type the job description' style={{height:'80px'}}/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>About Company</span>
                    <textarea className={styles.inputs} placeholder='Type about your company' style={{height:'80px'}}/>
                </label>
                

                <label className={styles.labels}>
                    <span className={styles.inputName}>Skills Required</span>
                    <input type='text' className={styles.inputs} placeholder='Enter the must have skills'/>
                </label>
                <label className={styles.labels}>
                    <span className={styles.inputName}>Information</span>
                    <input type='text' className={styles.inputs} placeholder='Enter the additional information'/>
                </label>


                
            </div>
                <div className={styles.buttons}>
                    <div>Cancel</div>
                    <div>+ Add Job</div>
                </div>
        </div>
    )
}

export default JobForm