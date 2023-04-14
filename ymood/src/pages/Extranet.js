import React from "react";
import Navbar from '../components/navbar';
import SignIn from './LogIn';
import Cloud from '../components/cloud';
import AuthProvider from "../AuthProvider";
import '../static/Extranet.css';


function Extranet() {
  return (
    <>
      <Navbar />
      <div> {AuthProvider.getUser() ? (
        <Cloud/>
      ) : (
        <SignIn/>
      )} </div>
    </>
  )
}

export default Extranet;