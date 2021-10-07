import React, { useState } from 'react'
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
import Status from './components/Status';

import LoginForm from './components/LoginForm';


import Error404 from './pages/Error404';
import Banner from './components/Banner';
import Footer from './components/Footer'



export default function App() {
  
  const [loggedInStatus, setLoggedInStatus] = useState("Inte inloggad");
  const [user, setUser] = useState ({});



  return (
    <div className="App">
      

      <Nav/>
      <Banner />
      <Status/>

      <Switch>

    

        <Route  
        path={"/Status"}   
        render={props => (
        <Status {...props} loggedInStatus={loggedInStatus} />
        )} />

        <Route exact path="/" component={Home} />


        <Route exact path="/LikedPosters" component={LikedPosters} />

        <Route exact path="/Cart" component={Cart} />

        <Route exact path="/Search" component={Search} />

        <Route exact path="/PosterPage" component={PosterPage} />

        <Route exact path="/LoginPage" component={LoginNew} />

        <Route exact path="/Login" component={Login} />

        <Route exact path="/CreateAccount" component={CreateAccount} />
        
        <Route exact path="/Confirmation" component={Confirmation} />

        <Route exact path="*" component={Error404} />

      </Switch>

      
    </div>
  )
}


