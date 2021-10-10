import React, {useState, useEffect} from 'react'
import CartStyle from '../css/Cart.module.css'
import { useHistory } from 'react-router-dom'

/*Imported forms */
// import CartAddress from '../components/CartAddressForm';
// import CartShipping from '../components/CartShippingForm';
// import CartPayment from '../components/CartPaymentForm';
// import CartProduct from '../components/CartProductForm';
import remove from '../icons/remove.png'

export default function Cart() {
    const [favorites, setFavorites] = useState([])
    const [posters, setPosters] = useState([]);
    const history = useHistory()
    const [text, NewText] = useState("");
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
      let favoriteIds = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
      favoriteIds.splice(favoriteIds.indexOf(id), 1)
      localStorage['Cart'] = JSON.stringify(favoriteIds)
      setFavorites(favoriteIds)
    }


    const removeAll = () => {
        if (localStorage.length > 1) {
        localStorage.removeItem('Cart');
        history.push('/Confirmation')


    }
    else {
            
            
      }
    
 } // {posters.map(({id, name, description, price, image, category}) => 

    
    return (
        <>
        
        <div className={CartStyle.cart}>  
            {posters.filter(poster => favorites.includes(poster.id))
      .map(poster => (
          <div    
            key={poster.id}
           
          >
                  {/*Products */}
        <div className ={CartStyle.ProductGrid}>
        <span className={CartStyle.removeText} >Ta bort</span>
        <img src={remove} className={CartStyle.remove} onClick={() => removeFavorite(poster.id)}></img>
        <span className={CartStyle.Size}>Storlek</span>
        <span>Antal</span><span className={CartStyle.Kr}>{poster.price} kr</span>
        <hr className={CartStyle.HeaderLine}/>

        <img src={poster.image}className={CartStyle.Previewimg} alt = 'Poster preview'/>
        <h2 className={CartStyle.ProductTitle}>Titel: {poster.name}</h2>

        {/* <h3 className={CartStyle.ProductPayment}>{poster.price}</h3> */}

        
        </div>

           
        
    </div>
          
           
        
          
        ) 
    )}
       {/* End of poster Map
        
            */}

        <div className={CartStyle.Total}>
          <p className={CartStyle.TotalSum}></p>
          <p>Inkl. moms</p>
          <button className={CartStyle.Totalbutton} onClick={removeAll}>Slutför köp</button>
      </div>
       {/* Address
       <h3 className={CartStyle.Title}>Adress</h3>
        <CartAddress/>

        {/*Shipping
        /<h3 className={CartStyle.Title}>Frakt</h3>
         <CartShipping/>
      
        {/*Payment 
        <h3 className={CartStyle.Title}>Betalning</h3>
        <CartPayment/> */

         /*Total */}
        
            </div>
        </>
  
  )

}
