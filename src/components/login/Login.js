import React, { useState } from "react";
import '../../styles/login.css'
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  } */

    const handleSubmit = (e) => {
        e.preventDefault();
        return {email,password}
    }
    return (
      <div className="form">
        <div className="auth-form-container">
            <h2>Se connecter</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="votre mail" 
                id="email" 
                name="email" 
                />
                <label>Mot de Passe</label>
                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password"
                placeholder="votre mot de passe" 
                id="password" 
                name="password" />
                <button type="submit">Se connecter</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Pas de compte? S'inscrire ici.</button>
        </div>
      </div>
        
    )
}

export default Login;