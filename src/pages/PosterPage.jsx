import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styles from '../css/PosterPage.module.css'
import poster2 from '../assets/img/poster.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Dropdown from '../components/Dropdown';
import BuyBtn from '../components/BuyBtn';

export default function PosterPage() {
    let { id } = useParams()
    const [posters, setPosters] = useState([]);
    const history = useHistory()


const fetchPosters = async () => {
    let fetchedPosters = await fetch(`/api/posters/` + id,)
    fetchedPosters = await fetchedPosters.json()

    setPosters(fetchedPosters)
  }

  useEffect(() => {
    fetchPosters()
  }, [])
    

    
    return (
        <div className={styles.mainContainer}>
                {posters.map(({id, name, description, price, image, category}) => 
            
            

            <div key={id}
            
            
            >
                <p>Fri leverans vid köp över 500 kr</p>
                <div className={styles.image}><img className={styles.img} src={image} alt="posters" /></div>
              
                    <div className={styles.info}>
                        <p className={styles.title}>Titel:{name}</p>
                        <p className={styles.description}>Beskrivning: {description}</p>
                    </div>

                    <div className={styles.bottom}>                   
                        <Dropdown />
                        <p className={styles.price}> Från {price} kr</p>
                        <BuyBtn />
                        {navigator.appVersion.includes("Electron") && <FontAwesomeIcon className={styles.heart} icon={faHeart}/>}
                    </div>
                    </div>   
                   )} 
        </div>        
            
              
    )
}


