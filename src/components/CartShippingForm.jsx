import React from 'react'
import CartStyle from '../css/Cart.module.css'

/*Icons Shipping */
import PostNord from '../icons/Shipping/Postnord.svg'
import DHL from '../icons/Shipping/DHL.svg'
import Instabox from '../icons/Shipping/Instabox.svg'
import Budbee from '../icons/Shipping/Budbee.svg'

export default function CartShippingForm() {
    return (
    <div className ={CartStyle.FormGridShipping}>
             
       <div className={CartStyle.ContentsPostNV}> 
       
        <input
            name='Shipping' 
            type='radio'
            value='PostNordV'
           
         />
        <img src={PostNord} alt = 'PostNord'/>
        <label className={CartStyle.ShippingInfo} htmlFor="PostNordV"><span>Postnord varubrev</span></label>
        <span className={CartStyle.ShippingPay}>20 sek</span>
      
        </div>
        <div className={CartStyle.ContentsPostNO}> 

        <input
            name='Shipping' 
            type='radio'
            value='PostNordO'
           
         />
         
        <img src={PostNord} alt = 'Postnord Ombud'/>
        <label className={CartStyle.ShippingInfo} htmlFor="PostNordO"><span>Postnord Ombud</span></label>
        <span className={CartStyle.ShippingFree}>Fri frakt</span>
         </div>
         
         <div className={CartStyle.ContentsBud}> 
        <input
            name='Shipping' 
            type='radio'
            value='Budbee'
           
         />
        <img src={Budbee} alt = 'Budbee Shipping'/>
        <label className={CartStyle.ShippingInfo} htmlFor="Budbee"><span>Budbee</span></label>
        <span className={CartStyle.ShippingFree}>Fri Frakt</span>
         </div>
         
         <div className={CartStyle.ContentsInsta}> 
        <input
            name='Shipping' 
            type='radio'
            value='Instabox'
           
         />
        <img src={Instabox} alt = 'Instabox Shipping'/>
        <label className={CartStyle.ShippingInfo} htmlFor="Instabox"><span>Instabox</span></label>
        <span className={CartStyle.ShippingFree}>Fri Frakt</span>

         </div>

         <div className={CartStyle.ContentsDHL}> 
        <input
            name='Shipping' 
            type='radio'
            value='DHL'
           
         />
        <img src={DHL} alt = 'DHL Shipping'/>
        <label className={CartStyle.ShippingInfo} htmlFor="DHL"><span>DHL</span></label>
        <span className={CartStyle.ShippingPay}>40 sek</span>

         </div>
         </div>
      
    )
}
