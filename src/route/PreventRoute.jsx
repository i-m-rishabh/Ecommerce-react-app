import { useContext } from "react"
import { UserContext } from "../Auth/userContext/UserContext"
import { Navigate } from "react-router-dom";

const PreventRoute = ({element}) => {
    const userCtx = useContext(UserContext);
    const isLoggedIn = userCtx.isLoggedIn;


    return (
        isLoggedIn ? <Navigate to={"/home"}/> : element
    )
}

export default PreventRoute;