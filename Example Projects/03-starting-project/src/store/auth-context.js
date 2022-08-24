import React, { createContext } from "react";

// createContext() directly will also work if we import it
const AuthContext = React.createContext({
    isLoggedIn: false
}); 

export default AuthContext;