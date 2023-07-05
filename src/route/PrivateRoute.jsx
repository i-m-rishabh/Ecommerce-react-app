import { useContext } from "react";
import { UserContext } from "../Auth/userContext/UserContext";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({element}) => {
    const userCtx = useContext(UserContext);
    const isLoggedIn = userCtx.isLoggedIn;


    return (
        isLoggedIn ? element : <Navigate to={"/login"}/>
    )
}

export default PrivateRoute;