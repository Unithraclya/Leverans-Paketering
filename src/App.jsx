

import React, { useState,useEffect } from 'react'
import './App.css'
import { Route, Switch } from "react-router";
import { useHistory } from 'react-router-dom'

import Home from './pages/Home';
import LikedPosters from './pages/LikedPosters';
import Cart from './pages/Cart';
import PosterPage from './pages/PosterPage';

import Login from './pages/Login';
import LoginNew from './pages/LoginNew';
import CreateAccount from './pages/CreateAccount';
import Confirmation from './pages/Confirmation';
import Nav from './components/Nav';
import Search from './components/Search';

import Error404 from './pages/Error404';
import Banner from './components/Banner';
import Footer from './components/Footer'

// Electron sometimes bugs the server on import 
// import Electron from './components/Electron';


export default function App() {


  const history = useHistory()

    
  const [loggedInStatus, setLoggedInStatus] = useState("Utloggad");
  const logout = () => {
    delete localStorage.loggedInUser;  
    setLoggedInStatus("Utloggad");
  }

  useEffect(() => {
    localStorage.loggedInUser && loggedInStatus === "Utloggad" &&  setLoggedInStatus(JSON.parse(localStorage.loggedInUser).mail);
    console.log(localStorage.loggedInUser);

    },[]
  )
  console.log(loggedInStatus);

  useEffect(() => {
    if (screen.width <= 699) {
    
      history.push('/LoginPage/')
      }
    },[]
  )

  
    
  return (
   
    <div className="App">
      

      <Nav loggedInStatus={loggedInStatus} logout={logout} 
       />
     
      <Banner />
      {navigator.appVersion.includes("Electron") && <Electron/>} 
      {/* {navigator.appVersion.includes("Electron") && <LikedPosters/>} */}

      <Switch>

    

        <Route exact path="/" component={Home} />

        {navigator.appVersion.includes("Electron") && <LikedPosters/>}

        <Route exact path="/Cart" component={Cart} />

        <Route exact path="/Search" component={Search} />

        <Route path="/poster/:id" component={PosterPage} />

        <Route exact path="/LoginPage">
        <LoginNew setLoggedInStatus = {setLoggedInStatus}/>    
        </Route>

        <Route exact path="/Login" component={Login} />

        <Route exact path="/CreateAccount" component={CreateAccount} />
        
        <Route exact path="/Confirmation" component={Confirmation} />

        <Route exact path="*" component={Error404} />

      </Switch>

      
    </div>
  )
}


