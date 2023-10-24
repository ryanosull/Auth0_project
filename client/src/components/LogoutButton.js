import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './../styles/LogoutButton.css'

const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0(); //useAuth0 hook destructured

    return (
        isAuthenticated && ( // if user is authenticated, return the log out button
            <button id="logoutButton" onClick={() => logout()}>
                Log out
            </button>
        )
    )
};

export default LogoutButton;