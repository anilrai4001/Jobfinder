import React from 'react'
import styles from './Tag.module.css'

function Tag({ skillName, skills, setSkills }) {


    const handleCross = () => {
        let newSkills = skills;
        const index = newSkills.indexOf(skillName);
        newSkills.splice(index, 1);
        setSkills([...newSkills]);

    }
    return (

        <div className={styles.Tag} >
            <span className={styles.skillName}>
                {skillName}
            </span>
            <span className={styles.cross} onClick={handleCross} style={{ cursor: 'pointer' }}>
                X
            </span>
        </div>

    )
}

export default Tag