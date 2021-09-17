import React from 'react'
import styles from '../css/Footer.module.css'

import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import youtube from '../assets/icons/youtube.png'

function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.mainContainer}>
            <div className={styles.text}>
                <h3>GALLERY WALL INSPIRATION</h3>
                <p> 
                    That blank white wall you’re bored of staring at? It’s the perfect canvas! Whatever your aesthetic-bohemain, classic, playful or minimalist. We’ve got exactly what you need to bring your dream gallery wall to life.
                </p>
            </div>
            <div className={styles.links}>
                <img className={styles.link} src={facebook} alt="" />
                <img className={styles.link} src={instagram} alt="" />
                <img className={styles.link} src={youtube} alt="" />
            </div>
            <div className={styles.copy}>
                    <p>Postergang AB &copy; All rights reserved</p>
            </div>
            
            
        </div>
        </footer>
    )
}

export default Footer
