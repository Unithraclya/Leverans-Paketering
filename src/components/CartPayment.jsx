import React from 'react'

/*Icons Payment */
import Swish from '../icons/Payment/Swish.svg'
import Faktura from '../icons/Payment/Faktura.svg'
import BankID from '../icons/Payment/BankID.svg'
import Card from '../icons/Payment/CardPayment.svg'
import PayPal from '../icons/Payment/PayPal.svg'

export default function CartPayment() {
    return (
        <div>
            <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={Swish} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Swish<span>0 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={Faktura} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Swish<span>0 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={BankID} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Swish<span>0 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={Card} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Swish<span>0 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={PayPal} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Swish<span>0 sek</span></label>
      
         </div>

        </div>
    )
}
