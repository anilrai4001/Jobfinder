import React from 'react'
import styles from './Filter.module.css'
import searchImage from '../assets/search.png'
import Tag from './Tag'
import { Link } from 'react-router-dom'

function Filter() {
    return (
        <div className={styles.Filter}>
            <div className={styles.container}>
                <div className={styles.search}>
                    <img src={searchImage} alt='search' />
                    <input type="text" placeholder='Type any job title' />
                </div>


                <div className={styles.skillsContainer}>
                    <select className={styles.skills}>
                        <option default >Skills &#65088;</option>
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
                        <Tag/>
                        <Tag/>
                        <Tag/>
                        <Tag/>
                        <Tag/>
                        <Tag/>
                    </div>
                    
                    <div className={styles.clear}>Clear</div>
                    <Link to='/job/new' className={styles.link} style={{backgroundColor:'#ED5353'}}>+ Add Job</Link>
                </div>

            </div>
        </div>
    )
}

export default Filter