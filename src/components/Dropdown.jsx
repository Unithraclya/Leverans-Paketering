import React from 'react'
import styles from '../css/Dropdown.module.css'


function Dropdown() {
    return (
       
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Välj Storlek</button>
            <div className={styles.dropdownContent}>
                <a className={styles.a}href="#">80 x 100</a>
                <a className={styles.a}href="#">50 x 70</a>
                <a className={styles.a}href="#">30 x 40</a>
            </div>
        </div>
        
    )
}

export default Dropdown
