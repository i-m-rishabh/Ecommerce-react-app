import { UserContext } from "./UserContext"

const UserContextProvider = (props) => {
    return(
        <UserContext.Provider value={
        {
            name:'',
            email:'',
            idToken:'',
            isLoggedIn:'',
            userLoggedOut:function (){
                this.name = '';
                this.email= '';
                this.idToken= '';
                this.isLoggedIn=false;
            },
            userLoggedIn:function (email,idToken){
                this.email= email;
                this.idToken= idToken;
                this.isLoggedIn= true;
            },
        }
        }>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;