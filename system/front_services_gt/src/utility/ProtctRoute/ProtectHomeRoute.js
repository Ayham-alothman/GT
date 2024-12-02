import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from "react-redux";

function ProtectHomeRoute(){
    
    const User=useSelector(s=>s.infoUser.user);
    if(User&&User.IsAdmin&&User.PreInfo){return <Outlet/>}
    else if(User&&User.IsAdmin){return  <Navigate to={`/startup`}/>}
    else{return <Navigate to={`/login`}/>}
}

export default ProtectHomeRoute;