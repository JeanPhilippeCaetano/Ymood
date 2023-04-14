import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, child, push, set } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import EmotionsCrud from "../EmotionsCrud.js";
import { useParams } from "react-router-dom";


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

const AddEmotion = () => {
    let id = useParams()
    addValue(id)
}

async function addValue(id) {
    const t = new EmotionsCrud()
    // const count = await t.readData(`/values/${year}/${month}/${day}/1`);
    let now = new Date()
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const count = t.readData(`/values/${year}/${month}/${day}/${id}`);
    console.log(count)
    // let count = (isNaN(t.readData(`/values/${year}/${month}/${day}/${id}`)) ? 0 : t.readData(`/values/${year}/${month}/${day}/${id}`))
    t.updateEmotion(`/values/${year}/${month}/${day}/${id}`, count+1)
}

const AddEmotions = () => {
    const [authUser, setAuthUser] = useState(null);
    const [emotion, setEmotion] = useState(null);

   

    

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

    // const initAdmins = () => {
    //     let admins = {jp:"WDzweZbWbmM1WgnrCDsPL2X7w282",emile:"knKcXFBWX3Zduk3bXXZJNccQoHv2"}
    //     set(ref(db, "/admins/"), admins)
    // }

    // const initEmotions = () => {
    //     set(ref(db, "/emotions/"), emotions)
    // }

    

    return (
        <div> {authUser ? (
            <>
                <p>{`Signed In as ${authUser.email}`}</p>
                <form action="/add-emotion/">
                <p>Select an emotion:</p>
                <input type="submit" name="1" value="énervé"/>
                <input type="submit" name="2" value="joyeux"/>
                <input type="submit" name="3" value="triste"/>
                <input type="submit" name="4" value="inquiet"/>
                <input type="submit" name="5" value="serein"/>
                <input type="submit" name="6" value="fatigué"/>
                <input type="submit" name="7" value="déçu"/>
                <input type="submit" name="8" value="excité"/>
                <input type="submit" name="9" value="frustré"/>
                <input type="submit" name="10" value="soulagé"/>
                </form>
            </>
        ) : (
            <p> Logged Out</p>
        )} </div>
    );

}

export default AddEmotions;