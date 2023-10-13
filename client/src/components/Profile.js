import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {

    const { userInfo, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <article>
                {JSON.stringify(userInfo)}
            </article>  
        )
    )
};

export default Profile;