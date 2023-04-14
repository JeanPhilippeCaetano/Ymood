import React, { useState } from "react";
import "../static/LogReg.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 2000)
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        })
        .catch((error) => {
            console.log(error)
            popup();
        })
    }

    return (
        <div className="login-form">
            <form className="cover-login" onSubmit={signIn}>
                <h1 className="child-login"> Connexion </h1>
                <input className="child-login" type="email" placeholder="Enter your email" value={email} onChange={(text) => setEmail(text.target.value)}></input>
                <input className="child-login" type="password" placeholder="Enter your password" value={password} onChange={(text) => setPassword(text.target.value)}></input>
                <button className="login-btn child-login" type="submit"> Se connecter</button>
                <a className="child-login" type="submit" href="/registerpage">Pas encore inscrit ? Inscription</a>
            </form>
            <div className={popupStyle}>
                <h3> Connexion échouée </h3>
                <p>Mauvais email ou mot de passe</p>
            </div>
        </div>
    )
}

export default LogIn;