
import React, { useEffect } from 'react'

/*StyleSheet */
import CartStyle from '../css/Cart.module.css'

/*Imported forms */
import CartAddress from '../components/CartAddress';
import CartShipping from '../components/CartShipping';
import CartPayment from '../components/CartPayment';

export default function Cart() {
    
   
  

    return (
<div className={CartStyle.cart}>   

        {/*Address */}
        <h3 className={CartStyle.Title}>Address</h3>
        <CartAddress/>

        {/*Shipping */}
        <h3 className={CartStyle.Title}>Shipping</h3>
        <CartShipping/>
      
        {/*Payment */}
        <h3 className={CartStyle.Title}>Payment</h3>
        <CartPayment/>

         {/*Total */}
        
        <div className={CartStyle.Total}>
            <p className={CartStyle.TotalSum}>Total 130 sek</p>
            <p>Included VAT</p>

            <button className={CartStyle.Totalbutton}>Complete purchase</button>
        </div>
    
        <p>Footer component</p>
 </div>
    )
}
