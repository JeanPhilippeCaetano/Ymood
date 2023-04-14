import React, { useState } from "react";
import Navbar from "../components/navbar";
import AuthProvider from "../AuthProvider";
import "../static/LogIn.css"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (text) => {
        text.preventDefault();
        AuthProvider.register(email, password)
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Navbar />
            <div className="login-form">
                <form className="cover-login" onSubmit={signUp}>
                    <h1 className="child-login"> Inscription </h1>
                    <input className="child-login" type="email" placeholder="Enter your email" value={email} onChange={(text) => setEmail(text.target.value)}></input>
                    <input className="child-login" type="password" placeholder="Enter your password" value={password} onChange={(text) => setPassword(text.target.value)}></input>
                    <button className="login-btn child-login" type="submit"> S'inscrire </button>
                    <a className="child-login" type="submit" href="/extranet"> Déjà un compte ? Connexion </a>
                </form>
            </div>
        </>
    )
}

export default SignUp;