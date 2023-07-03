import { createContext } from "react";

export const UserContext = createContext({
    name:'',
    email:'',
    idToken:'',
    isLoggedIn:'',
    userLoggedOut:()=>{

    },
    userLoggedIn:()=>{

    },
});