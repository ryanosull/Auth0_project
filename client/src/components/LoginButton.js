import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './../styles/LoginButton.css'

const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div id="loginParent">
                <button id="loginButton" onClick={() => loginWithRedirect()}>Log In</button>
            </div>
        )
    )
};

export default LoginButton;