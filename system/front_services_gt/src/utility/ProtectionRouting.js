import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectionRouting(){
    const token=Cookies.get('token');
    if(token){return <Outlet/>}
    return <Navigate to={`/login`}/>;
}

export default ProtectionRouting;