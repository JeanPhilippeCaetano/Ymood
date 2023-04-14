import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, child, push, set } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

class EmotionsCrud extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            database:db,
            data:{},
            // emotions:{
            //     1 : { name : "énervé", isPositive: false},
            //     2 : { name : "joyeux", isPositive: true},
            //     3 : { name : "triste", isPositive: false},
            //     4 : { name : "inquiet", isPositive: false},
            //     5 : { name : "serein", isPositive: true},
            //     6 : { name : "fatigué", isPositive: false},
            //     7 : { name : "déçu", isPositive: false},
            //     8 : { name : "excité", isPositive: true},
            //     9 : { name : "frustré", isPositive: false},
            //     10 : { name : "soulagé", isPositive: true},
            // },
            // admins:{
            //     jp:"WDzweZbWbmM1WgnrCDsPL2X7w282",
            //     emile:"knKcXFBWX3Zduk3bXXZJNccQoHv2"
            // },
            // year:'',
            // month:'',
            // day:''
        }
    }

    componentDidUpdate() {
        const ref = ref(db,"/values/");
        ref.on("value", (snapshot) => {
          const data = snapshot.val();
          this.setState({ data });
        });
      }

    initAdmins() {
        set(ref(this.state.database, "/admins/"), this.admins)
    }

    initEmotions() {
        set(ref(this.state.database, "/emotions/"), this.emotions)
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

    async readData(path) {
        return get(ref(this.state.database, path)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                return 0;
            }
          }).catch((error) => {
            console.error(error);
          });
    }
   
}

export default EmotionsCrud;