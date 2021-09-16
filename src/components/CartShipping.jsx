import React from 'react'

/*Icons Shipping */
import PostNord from '../icons/Shipping/Postnord.svg'
import DHL from '../icons/Shipping/DHL.svg'
import Instabox from '../icons/Shipping/Instabox.svg'
import Budbee from '../icons/Shipping/Budbee.svg'

export default function CartShipping() {
    return (
        <div>
             <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={PostNord} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Postnord<span>20 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={PostNord} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Postnord<span>20 sek</span></label>
      
         </div>
         
         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={Budbee} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Postnord<span>20 sek</span></label>
      
         </div>
         
         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={Instabox} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Postnord<span>20 sek</span></label>
      
         </div>

         <div>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
           
         />
        <img src={DHL} alt = 'Error 404'/>
        <label htmlFor="test_gateway">Postnord<span>20 sek</span></label>
      
         </div>
        </div>
    )
}
