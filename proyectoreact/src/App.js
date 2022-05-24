import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemListConteiner from './components/ItemListContainer/ItemsListConteiner';
import Divs from './components/div'
import React, { useState } from 'react'
import CardWidget from './components/CardWidget/CardWidget'
import './components/NavBar.css'
import ItemCount from './components/ItemCount/ItemCount'
import Card from './components/Card/Card'
import { width } from '@mui/system';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>

        <Card />
        
{/*       
      <ItemListConteiner gretting=" Hola A Todos!!"/> */}
      </Router>

      </div>
      
  );
}

export default App;
