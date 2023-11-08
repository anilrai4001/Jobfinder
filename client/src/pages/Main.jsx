import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Job from '../components/Job'
import axios from 'axios'
function Main() {
  const [jobArray, setJobArray] = useState([]);
  const [loggedin, setLoggedin] = useState(false);
  const [skills, setSkills] = useState([]);
  const [title,setTitle] = useState([]);

  let jobs = jobArray.map((ele) =>  <Job key={ele._id} data={ele} loggedin={loggedin} setLoggedin={setLoggedin} />);



  
  useEffect(() => {
    const fetchData = async () => {
      let queryParameters = skills.map((ele)=> `skills[]=${ele}`).join('&') + '&' + title.map((ele)=> `title[]=${ele}`).join('&');
      let response = await axios.get('http://localhost:5000/job?'+queryParameters);
      setJobArray(response.data);
    }
    fetchData();


    const userData = window.localStorage.getItem('userData');
      if (!userData) {
          setLoggedin(false);
      }
      else {
          setLoggedin(true);
      }

  },[setLoggedin,skills,title])

  return (
    <div className={styles.Main}>
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
      <Filter loggedin={loggedin} setLoggedin={setLoggedin} skills={skills} setSkills={setSkills} setTitle={setTitle}/>
      <div style={{ width: '100%' }}>
        {jobs}
      </div>

    </div>
  )
}

export default Main