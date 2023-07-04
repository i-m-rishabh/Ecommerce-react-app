import { useContext } from "react";
import { UserContext } from "./UserContext"
import CartContext from "../../cartContext/CartContext";

const UserContextProvider = (props) => {
    const cartCtx = useContext(CartContext);
    console.log("cart context");
    console.log(cartCtx);
    return(
        <UserContext.Provider value={
        {
            name:'',
            email:'',
            idToken:'',
            localId:'',
            isLoggedIn:'',
            userLoggedOut:function (){
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
                this.isLoggedIn= true;
                
            },
        }
        }>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;