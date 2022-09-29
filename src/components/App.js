import '../styles/App.css';
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import { Login } from "./Login";
import { Register } from "./Register";
<<<<<<< HEAD
import Navbar from './Navbar';
=======
import DashBoard from './DashBoard';
import Secteur from '../Pages/Secteur';
import Catalogue from '../Pages/Catalogue';
import Formation from '../Pages/Formation';
import Commande from '../Pages/Commande';
import Vente from '../Pages/Vente';
import Calendrier from '../Pages/Calendrier';
>>>>>>> 09aa44a9fdd60aec1a58c91d915c263f1bef034d

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element = { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          <Route path='/dashBoard' element = { <DashBoard/>}/>
          <Route path='/secteur' element = {<Secteur />} />
          <Route path='/catalogue' element = {<Catalogue />} />
          <Route path='/formation' element = {<Formation />} />
          <Route path='/commande' element = {<Commande />} />
          <Route path='/vente' element = {<Vente />} />
          <Route path='/calendrier' element = {<Calendrier />} />
      </Routes>
    </div>
  );
}

export default App;
