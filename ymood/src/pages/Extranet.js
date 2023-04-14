import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import SignIn from './LogIn';
import Cloud from '../components/cloud';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
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