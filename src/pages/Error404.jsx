import React from 'react'

//Importing Icons
import Error404 from '../icons/error404.svg'


const errorStyle = { 
    position: 'fixed',
    width: 'fit-content',
    top: '28%',
    bottom: '25%',
    margin: 'auto',
    left: '25%',
    right: '25%', 
    zIndex:'-5',
   

    
  
}




export default function Error() {
    return (
        <div style={errorStyle} >
            <img src={Error404} alt = 'Error 404'/>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
        </div>
    )
}
