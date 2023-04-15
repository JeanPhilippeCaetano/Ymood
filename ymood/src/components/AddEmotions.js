import React, { useState } from "react";
import { db } from "../firebase";
import { ref, get, child, push, set } from "firebase/database";
import EmotionsCrud from "../EmotionsCrud"

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
            1: { name: "énervé", isPositive: false },
            2: { name: "joyeux", isPositive: true },
            3: { name: "triste", isPositive: false },
            4: { name: "inquiet", isPositive: false },
            5: { name: "serein", isPositive: true },
            6: { name: "fatigué", isPositive: false },
            7: { name: "déçu", isPositive: false },
            8: { name: "excité", isPositive: true },
            9: { name: "frustré", isPositive: false },
            10: { name: "soulagé", isPositive: true },
        }

        set(ref(db, "/emotion/"), emotion)
    }

    const addValue = async (event) => {
        const t = new EmotionsCrud()
        const id = parseInt(event.target.value)
        const count = await t.readData(`/values/${year}/${month}/${day}/${id}`);

        // let count = (isNaN(t.readData(`/values/${year}/${month}/${day}/${id}`)) ? 0 : t.readData(`/values/${year}/${month}/${day}/${id}`))
        t.updateEmotion(`/values/${year}/${month}/${day}/${id}`, count + 1)
        console.log(count)
    }

    return (
        <div>
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
        </div>
    );

}

export default AddEmotions;