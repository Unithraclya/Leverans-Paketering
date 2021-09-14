import React from 'react'

//Importing Icons
import Error404 from '../icons/error404.svg'


export default function Error() {
    return (
        <div>
            <img src={Error404} alt = 'Error 404'/>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
        </div>
    )
}
