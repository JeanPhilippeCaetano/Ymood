import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase.js";
import { ref, get, child, push, set } from "firebase/database";

class AdminsCrud extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            database: db,
            data: {},
        }
    }

    componentDidUpdate() {
        const ref = ref(db, "/admins/");
        ref.on("value", (snapshot) => {
            const data = snapshot.val();
            this.setState({ data });
        });
    }

    createAdmin(adminName, uid) {
        set(ref(this.state.database, "/admins/" + adminName), uid)
    }

    deleteAdmin(path, adminId) {
        delete (ref(this.state.database, path), adminId)
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

    async getAllAdminsData() {
        let adminsData = []
        let admins = await this.readData("/admins/");
        console.log(admins);
    }

}

export default AdminsCrud;