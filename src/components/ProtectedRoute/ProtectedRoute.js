import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props}) => {
    return (
        props.loggedIn 
        ? <Component {...props}></Component>
        : <Navigate to="/" replace/>
    )
}

export default ProtectedRoute;