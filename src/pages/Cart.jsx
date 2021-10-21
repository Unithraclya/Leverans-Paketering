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
        let testStorage = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
        if (testStorage.length > 0) {
        localStorage.removeItem('Cart');
        history.push('/Confirmation')


    }
      else {
     
      //Nothing

      }
    
  } 

  //Find the sum of all posters
  function findSum(){
    let x = 0;
  {posters.filter(poster => favorites.includes(poster.id))
    .map(({price}) => x = x + price)


        return x;
      } 
    }

    const totalUsingMap = findSum()

      //Find how many posters
  function findAmount(){


    let x = localStorage['Cart'] && JSON.parse(localStorage['Cart']) || []
    console.log("x",x.length);
    
    return x.length;
       
       
    }

    const totalCount = findAmount()

    
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
        
        </div>   
    </div>
          
                 
        ) 
      )
    }
                    {/*Cart */}

        <div>
        <div className={CartStyle.Total}>
          <p className={CartStyle.TotalSum}>{totalUsingMap} kr</p>
          <p className={CartStyle.TotalSum}>{totalCount} st</p>

          <p>Inkl. moms</p>
          <button className={CartStyle.Totalbutton} onClick={removeAll}>Slutför köp</button>
      </div>
      
    
      </div>
        
        
            </div>
        </>
  
  )

}
