import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, child, push, set } from "firebase/database";

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
        <div> {authUser ? (
            <>
                <p>{`Signed In as ${authUser.email}`}</p>
                <button onClick={initWeek}> Enervé </button>
            </>
        ) : (
            <p> Logged Out</p>
        )} </div>
    );

}

export default AddEmotions;