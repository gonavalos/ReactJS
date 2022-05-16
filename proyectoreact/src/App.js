import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemListConteiner from './components/ItemListContainer/ItemsListConteiner';


function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
      </Router>
      <div>
      <ItemListConteiner gretting=" Hola A Todos!!"/>
      </div>    
      </div>
  );
}

export default App;
