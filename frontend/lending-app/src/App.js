import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Listing from './pages/listing';
import Dashboard from './pages/Dashboard';
import Convert from './pages/convert';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Borrow from './pages/borrow';
import Work from './pages/work';
import Contact from './pages/contact';
import Profile from './pages/profile'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element  ={<Homepage/>}/>
          <Route exact path='/listing' element  ={<Listing/>}/>
          <Route exact path='/dashboard' element  ={<Dashboard/>}/>
          <Route exact path='/convert' element  ={<Convert/>}/>
          <Route exact path='/login' element  ={<Login/>}/>
          <Route exact path='/signup' element  ={<Signup/>}/>
          <Route exact path='/borrow' element  ={<Borrow/>}/>
          <Route exact path='/work' element  ={<Work/>}/>
          <Route exact path='/contact' element  ={<Contact/>}/>
          <Route exact path='/profile' element  ={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
