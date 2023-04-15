import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import SignIn from './LogIn';
import Cloud from '../components/cloud';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import '../static/Extranet.css';
import AddEmotions from "../components/AddEmotions";
import EmotionsCrud from "../EmotionsCrud";
import { displayButtons } from "../components/buttons";
import { displayContent } from "../components/wordLoader";


// TOUT CE QUI EST COMMENTÉ CI-DESSOUS EST CE QU'AURAIT DU ÊTRE NOTRE NUAGE D'EMOTIONS DYNAMIQUE. 
// MAIS MALHEUREUSEMENT TOUT N'EST PAS TOUJOURS BLANC TOUT ROSE.

// async function getAllEmotionsData() {
//   const emotionsCrud = new EmotionsCrud();
//   let emotions = Array();
//   let now = new Date()
//   const year = now.getFullYear();
//   const month = now.getMonth() + 1;
//   const day = now.getDate();
//   const emotionsNames = await emotionsCrud.readData("/emotions/");
//   emotionsNames.forEach(async (element, index) => {
//     const count = await emotionsCrud.readData(`/values/${year}/${month}/${day}/${index}`);
//     emotions.push({ text: element.name, weight: count, isPositive: element.isPositive })
//   });
//   return emotions;
// }

// function Extranet() {
//   const [emotionsD, setEmotions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       // const emotionsCrud = new EmotionsCrud();
//       // let emotions = Array();
//       // let now = new Date()
//       // const year = now.getFullYear();
//       // const month = now.getMonth() + 1;
//       // const day = now.getDate();
//       // const emotionsNames = await emotionsCrud.readData("/emotions/");
//       // emotionsNames.forEach( async(element, index) => {
//       //   const count = await emotionsCrud.readData(`/values/${year}/${month}/${day}/${index}`);
//       //   emotions.push({text:element.name, weight: count, isPositive: element.isPositive})
//       // });
//       const emotionsData = await getAllEmotionsData();
//       setEmotions(emotionsData);

//       setIsLoading(false);
//       // console.log(emotionsData)
//     }
//     fetchData();
//   }, []);
//   if (isLoading) {
//     return <p>Loading...</p>;
//   } else {
//     return (
//       <div>
//         {displayContent(emotionsD)}
//         {displayButtons(emotionsD)}
//       </div>
//     )
//   }
// }


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
        <>
        <Cloud/>
        <AddEmotions />
        </>
      ) : (
        <SignIn/>
      )} </div>
    </>
  )
}

export default Extranet;