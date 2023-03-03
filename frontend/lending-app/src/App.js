import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
//import Login from './pages/Login';
import Homepage from './pages/homepage';
import Listing from './pages/listing';
import Dashboard from './pages/Dashboard';
import Convert from './pages/convert';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
