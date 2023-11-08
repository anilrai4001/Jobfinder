import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = ({loggedin,setLoggedin}) => {
    const navigate = useNavigate();

    const [name,setName] = useState('');

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            setLoggedin(true);
        }
        else{
            setLoggedin(false);
            setName(userData.name);
        }
    },[setLoggedin])

    const handleLogout = ()=>{
        window.localStorage.removeItem('userData');
        setLoggedin(false);
    }



    return (
        <div className={styles.Navbar}>
            <nav>
                <div className={styles.container}>
                    <span className={styles.title} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Jobfinder</span>
                    <div>
                        <span className={styles.login}>
                            {
                                loggedin 
                                ?
                                <Link onClick={handleLogout} className={styles.no_underline} style={{border:'none'}}>Logout</Link>
                                :
                                <Link to={'/login'} className={styles.no_underline}>Login</Link> 
                            }
                        </span>
                        <span className={styles.register}>
                            {
                                loggedin
                                ?
                                <span style={{color:"white"}}>Hello! {name}</span>
                                :
                                <Link to={'/register'} className={styles.no_underline} >Register</Link>
                                
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar