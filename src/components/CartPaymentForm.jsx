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
         <label className={CartStyle.ShippingInfo} htmlFor="Swish"><span>Swish</span></label>
         <span className={CartStyle.ShippingPay}>0 kr</span>
       
         </div>
         <div className={CartStyle.ContentsPostNO}> 
 
         <input
             name='Payment' 
             type='radio'
             value='Faktura'
            
          />
          
         <img src={Faktura} alt = 'Faktura'/>
         <label className={CartStyle.ShippingInfo} htmlFor="Faktura"><span>Faktura</span></label>
         <span className={CartStyle.ShippingPay}>20 kr</span>
          </div>
          
          <div className={CartStyle.ContentsBud}> 
         <input
             name='Payment' 
             type='radio'
             value='BankID'
            
          />
         <img src={BankID} alt = 'BankID'/>
         <label className={CartStyle.ShippingInfo} htmlFor="BankID"><span>BankID</span></label>
         <span className={CartStyle.ShippingPay}>0 kr</span>
          </div>
          
          <div className={CartStyle.ContentsInsta}> 
         <input
             name='Kort' 
             type='radio'
             value='Kort'
            
          />
         <img src={Card} alt = 'Kort betalning'/>
         <label className={CartStyle.ShippingInfo} htmlFor="Kort"><span>Kortbetalning</span></label>
         <span className={CartStyle.ShippingPay}>0 kr</span>
 
          </div>
 
          <div className={CartStyle.ContentsDHL}> 
         <input
             name='Payment' 
             type='radio'
             value='PayPal'
            
          />
         <img src={PayPal} alt = 'PayPal'/>
         <label className={CartStyle.ShippingInfo} htmlFor="PayPal"><span>PayPal</span></label>
         <span className={CartStyle.ShippingPay}>20 sek</span>
 
          </div>
          </div>
    )
}
