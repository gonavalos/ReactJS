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
        <Router>
          {/* <Card /> */}
          <ItemListConteiner />
        
          {/* <ItemListConteiner gretting=" Hola A Todos!!"/> */}
        </Router>

      </div>
      
  );
}

export default App;
