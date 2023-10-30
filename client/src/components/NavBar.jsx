import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={styles.Navbar}>
        <nav>
            <div className={styles.container}>
                <span className={styles.title}>Jobfinder</span>
                <div>
                    <span className={styles.login}>
                        <Link to={'/login'} className={styles.no_underline}>Login</Link>
                    </span>
                    <span className={styles.register}>
                        <Link to={'/register'} className={styles.no_underline} >Register</Link>
                    </span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar