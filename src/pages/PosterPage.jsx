import React from 'react'
import styles from '../css/PosterPage.module.css'
import poster2 from '../assets/img/poster.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Dropdown from '../components/Dropdown';
import BuyBtn from '../components/BuyBtn';

export default function PosterPage() {
    return (
        <div className={styles.mainContainer}>
                <p>Fri leverans vid köp över 500 kr</p>
                <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
              
                    <div className={styles.info}>
                        <p className={styles.title}>En tavla</p>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis modi asperiores aperiam ex quod necessitatibus enim deserunt iusto nam</p>
                    </div>

                    <div className={styles.bottom}>                   
                        <Dropdown />
                        <p className={styles.price}>139 kr</p>
                        <BuyBtn />
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>
             
            </div>     
    )
}


