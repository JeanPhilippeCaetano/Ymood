import { auth } from "../firebase";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from '../components/navbar';
import SignIn from './LogIn';
import Cloud from '../components/cloud';
import '../static/Extranet.css';


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
        <Cloud/>
      ) : (
        <SignIn/>
      )} </div>
    </>
  )
}

export default Extranet;