import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (text) => {
        text.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
        <div className="sign-in-container"> SignIn
            <form onSubmit={signIn}>
                <h1> Log In to your account </h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(text) => setEmail(text.target.value)}></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(text) => setPassword(text.target.value)}></input>
                <button type="submit"> Log In</button>
            </form>
        </div>
    )
}

export default SignIn;