import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form">
            <div className="auth-form-container">
                <h2>S'inscrire</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label>Nom</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    name="name" 
                    id="name" 
                    placeholder="Entrer votre nom complet" />
                    <label>Email</label>
                    <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="entrer votre mail" 
                    id="email" 
                    name="email" />
                    <label>Mot de Passe</label>
                    <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="mot de passe" 
                    id="password" 
                    name="password" />
                    <label>Confirmation MDP</label>
                    <input 
                    value={confirm} 
                    onChange={(e) => setConfirm(e.target.value)} 
                    type="password" 
                    placeholder="mot de passe" 
                    id="password confirmation" 
                    name="password" />
                    <button type="submit">Se connecter</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Vous avez déjà un compte? Se connecter ici.</button>
            </div>
        </div>
    )
}

export default Register;