import React from "react";
import { UserContext } from "../conteexts/UserContext";
import UserProfile from "./UserProfile";

function UserProvider(){
    const user = {
        name:"priyanka",
        age: 30
    };
    return(
        <UserContext.Provider value={user}>
            <h2>User Provider</h2>
            <UserProfile   />
        </UserContext.Provider>
    );

}
export default UserProvider;