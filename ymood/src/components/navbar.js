import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthProvider from "../AuthProvider";

const Navbar = () => {
    const userSignOut = () => {
        AuthProvider.logout()
        .catch((error) => console.log(error))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#">Ymood - Challenge 48h</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/#presentation">Présentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#equipe">L'équipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#visuels">Visuels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#liens-pratiques">Liens pratiques</a>
                        </li>
                        {AuthProvider.getUser() ? (
                            <li className="nav-item">
                                <a className="nav-link" onClick={userSignOut}> Se déconnecter {`${AuthProvider.getUser().email}`} </a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/extranet"> Se connecter / Inscrire </a>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navbar