import '../../styles/App.css';
// import React, { useState } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './Navbar';
// import Login from '../login/Login';
// import { Register } from "../login/Register";
import DashBoard from '../../Pages/DashBoard';
import Secteur from '../../Pages/Secteur';
import Catalogue from '../../Pages/Catalogue';
import Formation from '../../Pages/Formation';
import Commande from '../../Pages/Commande';
import Vente from '../../Pages/Vente';
import Calendrier from '../../Pages/Calendrier';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">
      <Navbar />
      <Routes>
          {/* <Route path='/' element = { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} /> */}
          <Route path='/' element = { <Navigate to={'/dashBoard'}/>}/>
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
