import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, child, push, set } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import EmotionsCrud from "../EmotionsCrud.js";


const emotions = {
    1 : { name : "énervé", isPositive: false},
    2 : { name : "joyeux", isPositive: true},
    3 : { name : "triste", isPositive: false},
    4 : { name : "inquiet", isPositive: false},
    5 : { name : "serein", isPositive: true},
    6 : { name : "fatigué", isPositive: false},
    7 : { name : "déçu", isPositive: false},
    8 : { name : "excité", isPositive: true},
    9 : { name : "frustré", isPositive: false},
    10 : { name : "soulagé", isPositive: true},
}

const AddEmotions = () => {
    const [authUser, setAuthUser] = useState(null);
    const [emotion, setEmotion] = useState({ name: "", isPositive: true });

    let now = new Date()
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();



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


    const addValue = async (event) => {
        const t = new EmotionsCrud()
        const id = parseInt(event.target.value)
        const count = await t.readData(`/values/${year}/${month}/${day}/${id}`);

        // let count = (isNaN(t.readData(`/values/${year}/${month}/${day}/${id}`)) ? 0 : t.readData(`/values/${year}/${month}/${day}/${id}`))
        t.updateEmotion(`/values/${year}/${month}/${day}/${id}`, count+1)
        console.log(count)
    }

    return (
        <div> {authUser ? (
            <>
                <p>{`Signed In as ${authUser.email}`}</p>
                <button onClick={addValue} value="1"> Enervé </button>
                <button onClick={addValue} value="2"> Joyeux </button>
                <button onClick={addValue} value="3"> Triste </button>
                <button onClick={addValue} value="4"> Inquiet </button>
                <button onClick={addValue} value="5"> Serein </button>
                <button onClick={addValue} value="6"> Fatigué </button>
                <button onClick={addValue} value="7"> Déçu </button>
                <button onClick={addValue} value="8"> Excité </button>
                <button onClick={addValue} value="9"> Frustré </button>
                <button onClick={addValue} value="10"> Soulagé </button>
            </>
        ) : (
            <p> Logged Out</p>
        )} </div>
    );

}

export default AddEmotions;