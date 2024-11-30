import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectHomeRoute(){
    const User= JSON.parse(Cookies.get('user')); 
    if(User&&User.IsAdmin&&User.PreInfo){return <Outlet/>}
    else if(User&&User.IsAdmin){return  <Navigate to={`/startup`}/>}
    else{return <Navigate to={`/login`}/>}
}

export default ProtectHomeRoute;