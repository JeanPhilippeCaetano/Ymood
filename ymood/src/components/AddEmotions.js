import React, { useState } from "react";
import { db } from "../firebase";
import { ref, get, child, push, set } from "firebase/database";
import AuthProvider from "../AuthProvider";

const AddEmotions = () => {
    const [emotion, setEmotion] = useState({ name: "", isPositive: true });

    let now = new Date()
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const initWeek = () => {
        set(ref(db, `/${year}/${month}/${day}/`))
    }

    const initEmotions = () => {
        let emotion = {
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

        set(ref(db, "/emotion/"), emotion)
    }

    const addValue = (id) => {
        let emotions_id = {
            "fatigué": 1,
            "énervé": 2,
            "déçu": 3,
            "heureux": 4
        } // objet ici a titre informatif mais il ne devra pas aller la

        // set(ref(db, `/${year}/${month}/${day}/${id}`), (value) => {
        //     if (!getEmotionNumber(value)) {
        //         return 1
        //     } else {
        //         return getEmotionNumber(value) + 1
        //     }
        // });
    }

    return (
        <div> {AuthProvider.getUser() ? (
            <>
                <p>{`Signed In as ${AuthProvider.getUser().email}`}</p>
                <button onClick={initWeek}> Enervé </button>
            </>
        ) : (
            <p> Logged Out</p>
        )} </div>
    );

}

export default AddEmotions;