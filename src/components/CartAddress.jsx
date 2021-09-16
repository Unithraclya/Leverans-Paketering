import React from 'react'
import {Link} from 'react-router-dom';

export default function CartAddress() {
    return (
        <div>
             <input
            name="email" 
            label='Email'
            placeholder='E-mail'
            type='email'
        />
        <div>
        <span>If you're already a customer</span><Link to="/Login">Sign in here.</Link>
        </div>
        <input 
            name='mobile' 
            label='Mobile' 
            placeholder='Mobile'
            type='tel'

        />
        <input 
            name='first name'
            label='First Name' 
            placeholder='First Name'
            type='text'  
        />
        <input 
            name='last name'
            label='Last Name' 
            placeholder='Last Name'
            type='text'  
        />
        <input 
            name='address'
            label='Address' 
            placeholder='Address'
            type='text'  
        />

        <input 
            name='postcode'
            label='Postcode' 
            placeholder='Postcode'
            type='text'  
        />

        <input 
            name='city'
            label='City' 
            placeholder='Town/City'
            type='text'  
        />
        </div>
    )
}
