import React from 'react'
import CartStyle from '../css/Cart.module.css'

/*Icons Payment */
import Swish from '../icons/Payment/Swish.svg'
import Faktura from '../icons/Payment/Faktura.svg'
import BankID from '../icons/Payment/BankID.svg'
import Card from '../icons/Payment/CardPayment.svg'
import PayPal from '../icons/Payment/PayPal.svg'

export default function CartPaymentForm() {
    return (
        <div className ={CartStyle.FormGridPayment}>
             
        <div className={CartStyle.ContentsPostNV}> 
        
         <input
             name='Payment' 
             type='radio'
             value='Swish'
            
          />
         <img src={Swish} alt = 'Swish'/>
         <label className={CartStyle.ShippingInfo} htmlFor="PostNordV"><span>Swish</span></label>
         <span className={CartStyle.ShippingPay}>0 sek</span>
       
         </div>
         <div className={CartStyle.ContentsPostNO}> 
 
         <input
             name='Payment' 
             type='radio'
             value='PostNordO'
            
          />
          
         <img src={Faktura} alt = 'Postnord Ombud'/>
         <label className={CartStyle.ShippingInfo} htmlFor="PostNordO"><span>Postnord Ombud</span></label>
         <span className={CartStyle.ShippingFree}>Fri frakt</span>
          </div>
          
          <div className={CartStyle.ContentsBud}> 
         <input
             name='Payment' 
             type='radio'
             value='Budbee'
            
          />
         <img src={BankID} alt = 'Budbee Shipping'/>
         <label className={CartStyle.ShippingInfo} htmlFor="Budbee"><span>Budbee</span></label>
         <span className={CartStyle.ShippingFree}>Fri Frakt</span>
          </div>
          
          <div className={CartStyle.ContentsInsta}> 
         <input
             name='Payment' 
             type='radio'
             value='Instabox'
            
          />
         <img src={Card} alt = 'Instabox Shipping'/>
         <label className={CartStyle.ShippingInfo} htmlFor="Instabox"><span>Instabox</span></label>
         <span className={CartStyle.ShippingFree}>Fri Frakt</span>
 
          </div>
 
          <div className={CartStyle.ContentsDHL}> 
         <input
             name='Payment' 
             type='radio'
             value='DHL'
            
          />
         <img src={PayPal} alt = 'DHL Shipping'/>
         <label className={CartStyle.ShippingInfo} htmlFor="DHL"><span>DHL</span></label>
         <span className={CartStyle.ShippingPay}>40 sek</span>
 
          </div>
          </div>
    )
}
