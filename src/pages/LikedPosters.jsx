import React, {useState, useEffect} from 'react'
import styles from '../css/LikedPosters.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import poster1 from '../assets/img/print.png'
import poster2 from '../assets/img/poster.png'
import remove from '../icons/remove.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Error404 from '../pages/Error404';

export default function LikedPosters() {
    const [favorites, setFavorites] = useState([])
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        (async () => {
          //fetch all users
          setPosters(await(await fetch('/api/posters' )).json());
        })();
      }, []);

    useEffect(() => {
      let favoriteIds = localStorage['LikedPosters'] && JSON.parse(localStorage['LikedPosters']) || []
      setFavorites(favoriteIds)
    }, [])
  
    const removeFavorite = id => {
      let favoriteIds = localStorage['LikedPosters'] && JSON.parse(localStorage['LikedPosters']) || []
      favoriteIds.splice(favoriteIds.indexOf(id), 1)
      localStorage['LikedPosters'] = JSON.stringify(favoriteIds)
      setFavorites(favoriteIds)
    }
  
    // {posters.map(({id, name, description, price, image, category}) => 


    return (
        <>
        
            <div className={styles.mainContainer}>
            {posters.filter(poster => favorites.includes(poster.id))
      .map(poster => (
          <div    
            key={poster.id}
           
          >
            <div className={styles.header}>
            <h1 className={styles.heading}>{poster.name}</h1>

            <div className={styles.items}>
                    <div className={styles.item}>
                <div className={styles.image}><img className={styles.image} src={poster.image} /></div>
                </div>
                <span className={styles.info}>Beskrivning: {poster.description}</span>
                <span className={styles.info}>Pris: {poster.price} kr
                <img src={remove} className={styles.remove} onClick={() => removeFavorite(poster.id)}></img>

                </span>

            </div>
            </div>
          </div>
      ))}
            {/* <PosterList/> Static */}
                {/* <div className={styles.header}>
                    <h1 className={styles.heading}>??nskelista</h1>
                    <p>F??rlora inte dina favoritprodukter! <br/> Skapa ett konto eller logga in  f??r att spara dem p?? alla dina enheter.</p>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                    <div className={styles.item}>
                        <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                        <div className={styles.top}>
                            <div className={styles.info}>
                                <p>En tavla<br/>Fr??n 0 kr</p>
                            </div>
                            <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                        </div>  
                    </div>                         
                </div>                          */}
            </div>
        </>
  
    )

}
