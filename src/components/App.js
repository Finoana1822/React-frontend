import '../styles/App.css';
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from './Navbar';
import '../../node_modules/font-awesome/css/font-awesome.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Routes>
          <Route path='/' element = { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          <Route path='/acceuil' element = {<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
