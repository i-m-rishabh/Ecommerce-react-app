import { createContext } from "react";

export const UserContext = createContext({
    name:'',
    email:'',
    idToken:'',
    localId:'',
    isLoggedIn:'',
    userLoggedOut:()=>{

    },
    userLoggedIn:()=>{

    },
});