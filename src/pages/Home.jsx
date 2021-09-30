import React, {useState, useEffect} from 'react'
import styles from '../css/Home.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import PosterInfo from './PosterInfo'
import poster2 from '../assets/img/poster.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

// simplify fetch
async function simpleFetch(url, settings) {
return await (await fetch(url, settings)).json();
  }

export default function Home() {
    const [users, setPoster] = useState([]);


    useEffect(() => {
        (async () => {
          //fetch all posters
          setPoster(await(await fetch('/api/posters')).json());
        })();
      }, []);


    const [setPosterInfo] = useState([]);
    useEffect(() => {
        fetchPosterInfo();
    }, [])

    const fetchPosterInfo = async () => {
        

        try {
            const response = await fetch ('/api/posters/');
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
                <p>Fri leverans vid köp över 500 kr</p>
                <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Kategori</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">Hästar</a>
                            <a className={styles.a}href="#">Hundar</a>
                            <a className={styles.a}href="#">Katter</a>
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
            
            
            <div>
            
            </div>

            
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>                         
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/>Från 0 kr</p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={faHeart}/>
                    </div>  
                </div>

                {posters.map(({id, name, description, price})=> 
            <div key={id}>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h3>{price}</h3>
        
        </div>
         )}                                               
            </div> 
            
        </div>  
              
    
    )
}