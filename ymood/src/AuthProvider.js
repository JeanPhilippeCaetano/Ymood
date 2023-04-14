import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

class AuthProvider {

    constructor() {
        this.user = null;
        this.authenticated = false;

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.authenticated = true;
            } else {
                this.user = null;
                this.authenticated = false;
            }
        });
    }

    async login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async logout() {
        return signOut(auth)
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getUser() {
        return this.user;
    }
}

export default new AuthProvider();