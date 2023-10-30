import React from 'react'
import styles from './Banner.module.css'
import BannerImage from '../assets/banner_image.png'

function Banner() {
  return (
    <div className={styles.Banner}>
        <img src={BannerImage} alt='Banner'/>
        <div>Your Personal Job Finder</div>
    </div>
  )
}

export default Banner