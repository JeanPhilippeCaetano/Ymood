import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase.js";
import { ref, get, child, push, set } from "firebase/database";

class EmotionsCrud extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            database:db,
            data:{},
            emotions: {
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
        }
    }
    initAdmins() {
        set(ref(this.state.database, "/admins/"), this.admins)
    }

    initEmotions() {
        set(ref(this.state.database, "/emotions/"), this.state.emotions)
    }

    createEmotion(path, emotion) {
        set(ref(this.state.database, path), emotion)
    }

    updateEmotion(path, emotion, count) {
        if(count === undefined) {
            set(ref(this.state.database, path), emotion)
        } else {
            set(ref(this.state.database, path), count)
        }
    }

    deleteEmotion(path, emotion) {
        delete(ref(this.state.database, path), emotion)
    }

    readData(path) {
        const promise = get(ref(this.state.database, path))
        .then(async(snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                throw await snapshot;
            }
        })
        .then(dt => {return dt})
        .catch((error) => {
          console.error(error);
          });
        return promise
    }
   
}

export default EmotionsCrud;