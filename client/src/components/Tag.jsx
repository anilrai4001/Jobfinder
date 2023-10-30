import React from 'react'
import styles from './Tag.module.css'

function Tag() {
    return (
        <div className={styles.Tag}>
            <span className={styles.skillName}>
                html
            </span>
            <span className={styles.cross}>
                X
            </span>
        </div>
    )
}

export default Tag