import { auth, db } from "../firebase";

export default function createUser(userInfos) {
    const usersRef = ref(db, 'users/')
    const userId = push(usersRef).key;
    let userData = {}

    if (validateUser(userInfos)) {
        userData = {
            firstname: userInfos["firstname"],
            pseudo: userInfos["pseudo"],
            date: userInfos["date"],
            email: userInfos["email"],
            password: userInfos["password"],
            friends: [],
            trips: [],
            motos: [],
            messaging: [],
        }
        set(ref(db, 'users/' + userId), userData);
        return true;
    } else {
        return validateUser(userInfos);
    }


}