import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectionRouting(){
    const token=Cookies.get('token');
    
    if(token){
        const infoToken=jwtDecode(token);
        if(infoToken.preinfo){return <Outlet/>}
        else {return <Navigate to={`/startup`}/>;}
        
    }
    return <Navigate to={`/login`}/>;
}

export default ProtectionRouting;