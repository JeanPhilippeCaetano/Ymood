import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (text) => {
        text.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential)
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="sign-in-container"> SignUp
            <form onSubmit={signUp}>
                <h1> Create account </h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(text) => setEmail(text.target.value)}></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(text) => setPassword(text.target.value)}></input>
                <button type="submit"> Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;