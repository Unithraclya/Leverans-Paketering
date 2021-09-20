import React from 'react'
import styles from '../css/Home.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'

export default function Home() {
    return (

        <div>
            
            


        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <p>Free shipping over 500kr!</p>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.top}>
                    </div>
                    <div className={styles.btns}>
                      {/*  CATEGORY BUTTON  */}
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Category ▼</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">Animals</a>
                            <a className={styles.a}href="#">Sexy firemen</a>
                            <a className={styles.a}href="#">City</a>
                        </div>
                        </div>
                        </div>
                        </div>
                    
                        {/*  PRICE BUTTON  */}
                        
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Price ▼</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">0KR - 200KR</a>
                            <a className={styles.a}href="#">200KR - 500KR</a>
                            </div>
                        </div>
                        
                    
                                
           </div>
           <div className={styles.image}></div>


        </div>
        </div>
        
    )

}