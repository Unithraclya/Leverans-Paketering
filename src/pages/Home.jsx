import React, {useState, useEffect} from 'react'
import styles from '../css/Home.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import PosterInfo from './PosterInfo'
import poster2 from '../assets/img/poster.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";


export default function Home() {
    const [posters, setPosters] = useState([]);


    useEffect(() => {
        (async () => {
          //fetch all users
          setPosters(await(await fetch('/api/posters' )).json());
        })();
      }, []);

    // const [setPosterInfo] = useState([]);
    // useEffect(() => {
    //     fetchPosterInfo();
    // }, [])

    // const fetchPosterInfo = async () => {
    //     try {
    //         const response = await fetch ('/api/posters');
    //         if (!response.ok) {
    //             throw new Error ('HTTP Error! status: ' + response.status);
    //         }
    //         const data = await response.json();
    //         setPosterInfo(data); 
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


  
 


    return (
       
      
       <div className={styles.mainContainer}>
          
        
            <div className={styles.header}>
                <p>Fri leverans vid köp över 500 kr</p>
                <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Kategori</button>
                        <div className={styles.dropdownContent}>
                        <a className={styles.a}href="#">Natur</a>
                            {/*<button className="NatureBtn" onClick="natureClick"><a className={styles.a}href="#">Natur</a></button>*/}
                            <a className={styles.a}href="#">Djur</a>
                            <a className={styles.a}href="#">Abstrakt</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Pris</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">100 kr</a>
                            <a className={styles.a}href="#">50 kr</a>
                            <a className={styles.a}href="#">20 kr</a>
                        </div>
                    </div>
                </div>
            </div>
           
         
            {posters.map(({id, name, description, price, image, category}) => 
            
            <div key={id}>
            

            <div className={styles.items} >
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={image} /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>{name} Poster {description} <br/> Från {price} kr</p>
                            
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                                                                      
            </div> 
            
          
            </div>
         ,console.log(posters))} 
        </div>        
       
    )
}