import React, {useState, useEffect} from 'react'
import styles from '../css/Home.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import PosterInfo from './PosterInfo'

export default function Home() {

    const [setPosterInfo] = useState([]);
    useEffect(() => {
        fetchPosterInfo();
    }, [])

    const fetchPosterInfo = async () => {
        try {
            const response = await fetch (null);
            if (!response.ok) {
                throw new Error ('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setPosterInfo(data); 
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <p>Free shipping over 500kr!</p>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.top}>
                    </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}> {/*  CATEGORY BUTTON  */}
                        <button className={styles.dropbtn}>Category ▼</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">Animals</a>
                            <a className={styles.a}href="#">Sexy firemen</a>
                            <a className={styles.a}href="#">City</a>
                        </div>
                        </div>
                        </div>
                        </div>
                    <div className={styles.dropdown}>{/*  PRICE BUTTON  */}
                        <button className={styles.dropbtn}>Price ▼</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">0KR - 200KR</a>
                            <a className={styles.a}href="#">200KR - 500KR</a>
                            </div>
                        </div>
                        
                    
                      
           </div>
            <div className = "posterProducts">
           <PosterInfo 
            PosterInfo={PosterInfo}
            pageId="Home"
            />
            </div>
        </div>        
    )
}