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
            placeholder='E-mail'
            type='email'
        />
        <div className={CartStyle.FormGridText}>
        <span>If you're already a customer</span><Link to="/Login" className={CartStyle.Sign}>Sign in here.</Link>
        </div>
        <input 
            className={CartStyle.FormGridMobile}
            name='mobile' 
            label='Mobile' 
            placeholder='Mobile'
            type='tel'

        />
        <input 
            className={CartStyle.FormGridFirst}
            name='first name'
            label='First Name' 
            placeholder='First Name'
            type='text'  
        />
        <input 
            className={CartStyle.FormGridLast}
            name='last name'
            label='Last Name' 
            placeholder='Last Name'
            type='text'  
        />
        <input 
            className={CartStyle.FormGridAddress}
            name='address'
            label='Address' 
            placeholder='Address'
            type='text'  
        />

        <input 
            className={CartStyle.FormGridAddressPCode}
            name='postcode'
            label='Postcode' 
            placeholder='Postcode'
            type='text'  
        />

        <input
            className={CartStyle.FormGridAddressCity}
            name='city'
            label='City' 
            placeholder='Town/City'
            type='text'  
        />
        </div>
    )
}
