import { useEffect, useRef, useState} from "react"
import NavStyle from '../css/Nav.module.css'
import React from 'react'
import {Link} from 'react-router-dom';

//Importing Icons
import SearchIcon from '../icons/search36dp.svg'
import HeartIcon from '../icons/heart36dp.svg'
import CartIcon from '../icons/cartfilled36dp.svg'




export default function Nav({loggedInStatus,logout}) {

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
      <div className={NavStyle.Status}>
      <span className={NavStyle.MobText}>Mobil</span>

        <h2 className={NavStyle.Statustext}>{loggedInStatus}</h2>
        {loggedInStatus !== "Utloggad" && <Link to="/LoginPage" className={NavStyle.Logout} onClick={logout}>Logga ut</Link>}
      </div>
    <div className={NavStyle.HeaderGrid}>
        {isMenuOpen && (
    
    <div className={NavStyle.TopNav}  
    onClick={() => setIsMenuOpen(newState => !newState)} >
     
     <ul 
        className={NavStyle.Links} >
        <Link to="/" className={NavStyle.Link}>Hem</Link>
        <Link to="/CreateAccount"className={NavStyle.Link}>Skapa Konto</Link>
        {loggedInStatus === "Utloggad" && <Link to="/LoginPage" className={NavStyle.Link}onClick={logout}>Logga in</Link>}
        {loggedInStatus !== "Utloggad" && <Link to="/LoginPage" className={NavStyle.Link}onClick={logout}>Logga ut</Link>}
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
   
         
            <Link to="/Search" className ={NavStyle.SearchIcon}><img src={SearchIcon} alt = 'Search' /></Link>
            <Link to="/" className={NavStyle.CompanyText}>POSTERGANG.COM </Link>
            {navigator.appVersion.includes("Electron") &&<Link to="/LikedPosters"className ={NavStyle.HeartIcon}><img src={HeartIcon} alt = 'Like'/></Link>}
            <Link to="/Cart"className ={NavStyle.CartIcon}><img src={CartIcon} alt = 'Cart'/></Link>
           
            {/* Empty line */}
            <hr className={NavStyle.HeaderLine}/>
        </div> 
      
        </div>
      
        </div>
       
    )
}
