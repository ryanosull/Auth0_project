import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './../styles/LoginButton.css'

const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0(); //useAuth0 hook destructured

    return ( //if user is not authenticated, return the log in button
        !isAuthenticated && (
                <button id="loginButton" onClick={() => loginWithRedirect()}>Log In</button>
        )
    )
};

export default LoginButton;