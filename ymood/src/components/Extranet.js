import '../static/Extranet.css';
import Navbar from './navbar';
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


function Extranet() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out successful')
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Navbar />
      <div> {authUser ? (
        <div></div>
      ) : (
        <p> Logged Out</p>
      )} </div>
    </>
  )
}

export default Extranet;