import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import {  BrowserRouter as Router,  Switch,  Route,  Link} 
from "react-router-dom";
import Signup from './components/Registration';
import Login from './components/Login';

function App() {
  return (
 <Router>
   <Switch>
     <Route exact path="/">
      <Body/>
      </Route>
      <Route path="/about-us">
        <About/>
      </Route>
      <Route path="/user-signup"> <Signup/></Route>
      <Route path="/user-Login" >Login</Route>
      
      <Router/>
     
   </Switch>
 </Router>


  );
}

export default App;
