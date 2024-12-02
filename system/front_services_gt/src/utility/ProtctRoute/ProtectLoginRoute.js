import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from "react-redux";

function ProtectLoginRoute(){
    const User=useSelector(s=>s.infoUser.user);

    if(User=='nologin'){return <Outlet/>}
    else{alert(`you already login `)}

}

export default ProtectLoginRoute;