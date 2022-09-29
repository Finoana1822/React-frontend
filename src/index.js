import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/main/App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginApp from './components/login/LoginApp';
// import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
    <Route path='/login/*' element={<LoginApp />}></Route>
    <Route path='/*' element={<App />}></Route>
  </Routes>
</Router>

  // <React.StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
