
import React, { useEffect } from 'react'

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
        <CartProduct/>

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
            <p className={CartStyle.TotalSum}>Total 139 sek</p>
            <p>Included VAT</p>

            <button className={CartStyle.Totalbutton}>Complete purchase</button>
        </div>
    
        <p>Footer component</p>
 </div>
    )
}
