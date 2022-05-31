import './App.css';
import Navbar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import ItemListConteiner from './components/ItemListContainer/ItemsListConteiner';
import React, { useState } from 'react'


function App() {
  return (
    <div className="App">
      <BrowserRouter />
        <Navbar/>
        {/* <div className='div1'></div> */}
        <img className='div1 img-fluid' src='/img/img-index/LiveFire_Hero7.webp'></img>
        <Router>
          {/* <Card /> */}
          <ItemListConteiner />
        
          {/* <ItemListConteiner gretting=" Hola A Todos!!"/> */}
        </Router>

      </div>
      
  );
}

export default App;
