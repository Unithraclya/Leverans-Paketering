import React, { useState } from 'react'
import './App.css'
import { Route, Switch } from "react-router";
import Home from './pages/Home';
import LikedPosters from './pages/LikedPosters';
import Cart from './pages/Cart';
import PosterPage from './pages/PosterPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Confirmation from './pages/Confirmation';
import Nav from './components/Nav';

import LoginForm from './components/LoginForm';


import Error404 from './pages/Error404';
import Banner from './components/Banner';
import Footer from './components/Footer'



export default function App() {
  

  return (
    <div className="App">
      

      <Nav/>
      <Banner />
      
      <Switch>

        <Route exact path="/" component={Home} />
      
        <Route exact path="/LikedPosters" component={LikedPosters} />

        <Route exact path="/Cart" component={Cart} />

        <Route exact path="/PosterPage" component={PosterPage} />

        <Route exact path="/Login" component={Login} />

        <Route exact path="/CreateAccount" component={CreateAccount} />
        
        <Route exact path="/Confirmation" component={Confirmation} />

        <Route exact path="*" component={Error404} />

      </Switch>

      
    </div>
  )
}


