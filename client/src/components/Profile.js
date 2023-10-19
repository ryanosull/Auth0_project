import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './../styles/Profile.css'


const Profile = () => {

    const { user, isAuthenticated } = useAuth0(); //imported from Auth0 / useAuth0 hook

    return (
        isAuthenticated && (
            <div id="profile">
                <h4>User {JSON.stringify (user.name)} is logged in.</h4>
                {user?.picture && <img id="picture" src={user.picture} alt={user?.name}></img>}
            </div>  
        )
    )
};

export default Profile;