import React from 'react'
import {Link} from 'react-router-dom';
import CartStyle from '../css/Cart.module.css'


export default function CartAddressForm() {
    return (
        <div className ={CartStyle.FormGrid}>
             <input
            className={CartStyle.FormGridEmail}
            name="email" 
            label='Email'
            placeholder='E-post'
            type='email'
        />
        <div className={CartStyle.FormGridText}>
        <span>Om du redan är kund</span><Link to="/LoginPage" className={CartStyle.Sign}>Logga in här.</Link>
        </div>
        <input 
            className={CartStyle.FormGridMobile}
            name='mobile' 
            label='Mobile' 
            placeholder='Mobil'
            type='tel'

        />
        <input 
            className={CartStyle.FormGridFirst}
            name='first name'
            label='First Name' 
            placeholder='Namn'
            type='text'  
        />
        <input 
            className={CartStyle.FormGridLast}
            name='last name'
            label='Last Name' 
            placeholder='Efternamn'
            type='text'  
        />
        <input 
            className={CartStyle.FormGridAddress}
            name='address'
            label='Address' 
            placeholder='Adress'
            type='text'  
        />

        <input 
            className={CartStyle.FormGridAddressPCode}
            name='postcode'
            label='Postcode' 
            placeholder='Postnummer'
            type='text'  
        />

        <input
            className={CartStyle.FormGridAddressCity}
            name='city'
            label='City' 
            placeholder='Postort'
            type='text'  
        />
        </div>
    )
}
