import React from 'react'
import styles from '../css/LikedPosters.module.css'
import CartIcon from '../icons/cartfilled36dp.svg'
import poster1 from '../assets/img/print.png'
import poster2 from '../assets/img/poster.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Error404 from '../pages/Error404';

export default function LikedPosters() {
<<<<<<< Updated upstream

=======
    

 
>>>>>>> Stashed changes

   
    return (
        <>
<<<<<<< Updated upstream
            <div className={styles.mainContainer}>
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
=======
  
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <h1 className={styles.heading}>Önskelista</h1>
                <p>Förlora inte dina favoritprodukter! <br/> Skapa ett konto eller logga in  för att spara dem på alla dina enheter.</p>
            </div>
            <div className={styles.items}>

                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                <div className={styles.item}>
                    <div className={styles.image}><img className={styles.img} src={poster2} alt="" /></div>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <p>En tavla<br/><b>0 kr</b></p>
                        </div>
                        <FontAwesomeIcon className={styles.heart} icon={solidHeart}/>
                      </div>
                    <div className={styles.btns}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Välj Storlek</button>
                        <div className={styles.dropdownContent}>
                            <a className={styles.a}href="#">80 x 100</a>
                            <a className={styles.a}href="#">50 x 70</a>
                            <a className={styles.a}href="#">30 x 40</a>
                        </div>
                    </div>
                    <button className={styles.btn}>Lägg till i varukorg</button> 
                    </div>
                </div>             
                           

                    
           </div>
           
        </div>
         
         </>
>>>>>>> Stashed changes
    )

}