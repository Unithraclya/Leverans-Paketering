import React, { useState } from 'react'
import './App.css'
import { Route, Switch } from "react-router";
import Home from './pages/Home';
import LikedPosters from './pages/LikedPosters';
import Cart from './pages/Cart';
import PosterPage from './pages/PosterPage';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';


export default function App() {


  return (
    <div className="App">

      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/LikedPosters" component={LikedPosters} />

        <Route exact path="/Cart" compontent={Cart} />

        <Route exact path="/PosterPage" component={PosterPage} />

        <Route exact path="/Login" component={Login} />

        <Route exact path="/Confirmation" component={Confirmation} />

      </Switch>
      
    </div>
  )
}


