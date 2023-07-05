import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext"
import CartContext from "../../cartContext/CartContext";
import { json } from "react-router-dom";

const UserContextProvider = (props) => {
    const cartCtx = useContext(CartContext);
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        idToken:'',
        localId:'',
        isLoggedIn:false,
    })
    useEffect(()=>{
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
        if(userDataFromLocalStorage){
            setUserData(userDataFromLocalStorage);
        }
    },[])

    useEffect(()=>{
        //adding remaining session time on page refresh
        const expireTime = parseInt(localStorage.getItem("expireTime"));
        const currentTime = new Date().getTime();
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if(storedUserData){
            const isUserLoggedIn = storedUserData.isLoggedIn;
            if(expireTime && isUserLoggedIn){
                if(expireTime > currentTime){
                    const remainingTime = expireTime - currentTime;
                    setTimeout(()=>{
                        alert("session expired need to login again");
                        localStorage.removeItem("userData");
                        setUserData({});
                    },remainingTime)
                }else{
                    alert("session expired need to login again");
                    localStorage.removeItem("userData");
                    setUserData({});
                }
            } 
        }
                
    },[])
    
    console.log("cart context");
    console.log(cartCtx);
    return(
        <UserContext.Provider value={
        {
            name:userData.name,
            email:userData.email,
            idToken:userData.idToken,
            localId:userData.localId,
            isLoggedIn:userData.isLoggedIn,

            userLoggedOut:function (){
                localStorage.removeItem("userData");
                localStorage.removeItem("cart");
                this.name = '';
                this.email= '';
                this.idToken= '';
                this.localId= '';
                this.isLoggedIn=false;
            },

            userLoggedIn:function (email,idToken, localId){
                this.email= email;
                this.idToken= idToken;
                this.localId = localId;
                this.isLoggedIn = true;
            },
        }
        }>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;