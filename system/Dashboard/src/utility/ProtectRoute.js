
import { Navigate,Outlet } from "react-router-dom";
import Cookies from 'js-cookie'

function ProtectRoute(){
     const token= Cookies.get('token');
    if(token){return <Outlet/>}
    else{return <Navigate to={`/signin`}/>}    
}

export default ProtectRoute;