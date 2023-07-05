import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext"
import CartContext from "../../cartContext/CartContext";

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