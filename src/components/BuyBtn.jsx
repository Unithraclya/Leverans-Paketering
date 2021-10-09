import React, {useState, useEffect} from 'react'
import styles from '../css/BuyBtn.module.css'


function BuyBtn() {
    
    
    // let favoriteIds = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []

    const [change, setChange] = useState(null);
    const addCart = id => {
        let favoriteIds = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
        favoriteIds.push(id)
        localStorage['Cart'] = JSON.stringify(favoriteIds)
        setChange(Math.random())
      }
    
    
    
    return (
        <div>
            <button onClick={() => addCart(id)} className={styles.btn}>Köp</button> 
        </div>
    )
}

export default BuyBtn
