import React, {useState, useEffect} from 'react'
import styles from '../css/LikedPosters.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import poster1 from '../assets/img/print.png'
import poster2 from '../assets/img/poster.png'
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

    // const PosterList = () => (
    //     posters.filter(poster => favorites.includes(poster.id))
    //   .map(poster => (
    //       <div    
    //         key={poster.id}
    //         // onClick={() => history.push('/hero/' + hero.id)} 
    //         // className="card"
    //         // style={styles.heroList}
    //       >
              
    //         <div className="card-image">
    //           <img src={poster.image} />
    //         </div>
    //         <span className="card-title">{poster.name}</span>
    //         <i onClick={() => removeFavorite(poster.id)}>star</i>
    //       </div>
    //   ))
    // )




    



    return (
        <>
        
            <div className={styles.mainContainer}>
            {posters.filter(poster => favorites.includes(poster.id))
      .map(poster => (
          <div    
            key={poster.id}
            // onClick={() => history.push('/hero/' + hero.id)} 
            // className="card"
            // style={styles.heroList}
          >
            <div className={styles.header}>
            <h1 className={styles.heading}>Önskelista</h1>
            <p>Förlora inte dina favoritprodukter! <br/> Skapa ett konto eller logga in  för att spara dem på alla dina enheter.</p>
                <div className="card-image">
                <img src={poster.image} />
                </div>
                <span className="card-title">{poster.name}</span>
                <i onClick={() => removeFavorite(poster.id)}>star</i>
            </div>
          </div>
      ))}
            {/* <PosterList/> */}
                <div className={styles.header}>
                    <h1 className={styles.heading}>Önskelista</h1>
                    <p>Förlora inte dina favoritprodukter! <br/> Skapa ett konto eller logga in  för att spara dem på alla dina enheter.</p>
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
                </div>                         
            </div>
        </>
  
    )

}
