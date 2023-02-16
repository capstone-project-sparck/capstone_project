import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected({loginPass}){
if(!loginPass){
    return(<Navigate to="/" />)
}
return <Outlet />
}