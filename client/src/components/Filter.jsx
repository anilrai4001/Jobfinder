import React, { useEffect} from 'react'
import styles from './Filter.module.css'
import searchImage from '../assets/search.png'
import Tag from './Tag'
import { Link } from 'react-router-dom'


function Filter({ loggedin, setLoggedin ,skills,setSkills,setTitle}) {
    

    useEffect(() => {
        const userData = window.localStorage.getItem('userData');
        if (!userData) {
            setLoggedin(false);
        }
        else {
            setLoggedin(true);
        }
    }, [setLoggedin,setSkills])

    const handleChange = (e) => {
        let skill = e.target.value;
        let newSkills = [...skills,skill];
        setSkills(newSkills);
        // console.log(skills);
    }

    
    


    return (
        <div className={styles.Filter}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <img src={searchImage} alt='search' />
                    <input type="text" placeholder='Type any job title' onChange={(e)=>{
                        setTitle([e.target.value])
                    }} />
                </div>


                <div className={styles.skillsContainer}>
                    <select className={styles.skills} onChange={handleChange} defaultValue=''>
                        <option disabled value='' hidden >Skills &#65088;</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Javasript">Javascript</option>
                        <option value="React.js">React.js</option>
                        <option value="Node.js">Node.js</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Express.js">Express.js</option>
                        <option value="EJS">EJS</option>
                        <option value="Bootstrap">Bootstrap</option>
                        <option value="Python">Python</option>
                        <option value="Django">Django</option>
                        <option value="Java">Java</option>
                        <option value="Springboot">Springboot</option>
                        <option value="Swift">Swift</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Fullstack">Fullstack</option>
                    </select>

                    <div className={styles.skillTags}>
                        {
                            skills.map((ele, index) => <Tag key={index} skillName={ele} skills={skills} setSkills={setSkills} />)
                        }
                    </div>

                    <div className={styles.clear} onClick={()=>setSkills([])}>Clear</div>
                    {
                        loggedin
                            ?
                            <Link to='/addjob' className={styles.link} style={{ backgroundColor: '#ED5353' }}>+ Add Job</Link>
                            :
                            null
                    }

                </div>

            </div>
        </div>
    )
}

export default Filter