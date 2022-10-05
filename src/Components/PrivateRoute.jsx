import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({children}) {
     const {authState} = useContext(AppContext)

     if(!authState.isAuth)
     {
        return <Navigate to="/login"/>
     }
     return children;
}

export default PrivateRoute;