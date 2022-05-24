import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemListConteiner from './components/ItemListContainer/ItemsListConteiner';
import Divs from './components/div'
import React, { useState } from 'react'
import CardWidget from './components/CardWidget/CardWidget'
import './components/NavBar.css'


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
      
      <ItemListConteiner gretting=" Hola A Todos!!"/>
      </Router>
      </div>
      
  );
}

export default App;
