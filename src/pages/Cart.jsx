
import { withContext, useNamedContext } from 'react-easier'

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

/*StyleSheet */
import CartStyle from '../css/Cart.module.css'
/*Imported forms */
import CartAddress from '../components/CartAddressForm';
import CartShipping from '../components/CartShippingForm';
import CartPayment from '../components/CartPaymentForm';
import CartProduct from '../components/CartProductForm';
import remove from '../icons/remove.png'


export default function Cart() {

 
    const [favorites, setFavorites] = useState([])
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        (async () => {
          //fetch all users
          setPosters(await(await fetch('/api/posters' )).json());
        })();
      }, []);

    useEffect(() => {
      let favoriteIds = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
      setFavorites(favoriteIds)
    }, [])

    const removeFavorite = id => {
      let cartItems = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
      cartItems.splice(cartItems.indexOf(id), 1)
      localStorage['Cart'] = JSON.stringify(cartItems)
      setFavorites(cartItems)

    }
  
    
   

    console.log(localStorage);

    return (

<div className={CartStyle.cart}>  

{posters.filter(posters => favorites.includes(posters.id))
           .map(({id, name, description, price, image, category}) => (
        <div    
        key={id}
           
>
        {/*Products */}
        <div className ={CartStyle.ProductGrid}>
        <span>Produkt</span><span className={CartStyle.Size}>Storlek</span>
        <span>Antal</span><span>{price}</span>
        <hr className={CartStyle.HeaderLine}/>

        <img src={image}className={CartStyle.Previewimg} alt = 'preview'/>
        <h2 className={CartStyle.ProductTitle}>{name}</h2>
       
        <h3 className={CartStyle.ProductPayment}>{price}</h3>

        
         </div>

         
         <img src={remove} className={CartStyle.remove} onClick={() => removeFavorite(poster.id)}></img>


        {/*Address */}
        <h3 className={CartStyle.Title}>Adress</h3>
        <CartAddress/>

        {/*Shipping */}
        <h3 className={CartStyle.Title}>Frakt</h3>
        <CartShipping/>
      
        {/*Payment */}
        <h3 className={CartStyle.Title}>Betalning</h3>
        <CartPayment/>

         {/*Total */}
        
        <div className={CartStyle.Total}>
            <p className={CartStyle.TotalSum}>Summa 139 kr</p>
            <p>Inkl. moms</p>

            <button className={CartStyle.Totalbutton}>Slutför köp</button>
        </div>
        </div>        
            ))
        } 
        </div>  
    
              
    )
}
