import React from "react";
import AuthProvider from "../AuthProvider";

const AuthDetails = () => {
    const userLogOut = () => {
        AuthProvider.logout()
        .catch((error) => console.log(error))
    }

    return (
        <div> {AuthProvider.getUser() ? (
            <>
                <p>{`Signed In as ${AuthProvider.getUser().email}`}</p>
                <button onClick={userLogOut}> Sign Out</button>
            </>
        ) : (
            <p> Logged Out</p>
        )} </div>
    );

}

export default AuthDetails;