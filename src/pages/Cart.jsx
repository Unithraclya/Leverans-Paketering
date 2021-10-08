

import React, { useState, useEffect } from 'react'

/*StyleSheet */
import CartStyle from '../css/Cart.module.css'
/*Imported forms */
import CartAddress from '../components/CartAddressForm';
import CartShipping from '../components/CartShippingForm';
import CartPayment from '../components/CartPaymentForm';
import CartProduct from '../components/CartProductForm';


export default function Cart() {
    
   
  

    return (

<div className={CartStyle.cart}>  

            
            

        {/*Products */}
        <CartProduct
        />

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
    )
}
