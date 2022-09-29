import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import DashBoard from '../main/DashBoard'
import Login from './Login'
import Register from './Register'

export default function LoginApp() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

  return (
    //<BrowserRouter>
        <Routes>
          <Route path='/' element = { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          {/* <Route path='/dashBoard' element = { <DashBoard/>}/> */}
      </Routes>
    //</BrowserRouter>
  )
}
