

import React, { useState,useEffect } from 'react'
import './App.css'
import { Route, Switch } from "react-router";

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


import LoginForm from './components/LoginForm';


import Error404 from './pages/Error404';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Electron from './components/Electron';



export default function App() {

  const [loggedInStatus, setLoggedInStatus] = useState("Utloggad");
  const logout = () => {
    delete localStorage.loggedInUser;  
    setLoggedInStatus("Utloggad");
  }

  useEffect(() => {
    localStorage.loggedInUser && loggedInStatus === "Utloggad" &&  setLoggedInStatus(JSON.parse(localStorage.loggedInUser).mail);
    console.log(localStorage.loggedInUser);
  },[])
  console.log(loggedInStatus);


  return (
    <div className="App">
      

      <Nav loggedInStatus={loggedInStatus} logout={logout}/>
      <Banner />
      {navigator.appVersion.includes("Electron") && <Electron/>} 
      {/* {navigator.appVersion.includes("Electron") && <LikedPosters/>} */}

      <Switch>

    

        <Route exact path="/" component={Home} />

        {navigator.appVersion.includes("Electron") && <LikedPosters/>}

        <Route exact path="/cart" component={Cart} />

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


