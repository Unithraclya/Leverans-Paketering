import { useEffect, useRef, useState } from "react"
import NavStyle from '../css/Nav.module.css'
import React from 'react'

//Importing Icons
import SearchIcon from '../icons/search36dp.svg'
import HeartIcon from '../icons/heart36dp.svg'
import CartIcon from '../icons/cartfilled36dp.svg'




export default function Nav() {

    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isMenuOpen])

      
     
    
    return (
        
<div className={NavStyle.MenuHeader}>
        <div ref={ref}>
        
        <div className={NavStyle.HeaderGrid}>
{isMenuOpen && (
    
    <div className={NavStyle.TopNav}  
    onClick={() => setIsMenuOpen(newState => !newState)} >
     
     <ul 
        className={NavStyle.Links} >
        <a className={NavStyle.Link}href="#news">News
        </a>
        <a className={NavStyle.Link}href="#contact">Contact</a>
        <a className={NavStyle.Link}href="#about">About</a>
     </ul>
   </div>
     
)}
   
      
     
            <div 
            className={NavStyle.center} 
            alt ="Nav button" 
            onClick={() => setIsMenuOpen(newState => !newState)}>
            <div/>    
            {/* Navigation invisible */}
   
  </div> 
 

            <img className ={NavStyle.SearchIcon} src={SearchIcon} alt = 'Search' />
            <h2 className={NavStyle.CompanyText}>POSTERGANG.COM</h2>
            <img className ={NavStyle.HeartIcon}src={HeartIcon} alt = 'Like' />
            <img className ={NavStyle.CartIcon}src={CartIcon} alt = 'Cart' />
           
            {/* Empty line */}
            <hr className={NavStyle.HeaderLine}/>
        </div> 
        </div>

        </div>
       
    )
}
