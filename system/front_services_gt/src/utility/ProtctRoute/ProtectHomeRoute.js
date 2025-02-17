import { Navigate, Outlet } from "react-router-dom";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import StartupAdmin from "../../pages/StartupAdmin";

function ProtectHomeRoute() {
    const token = Cookies.get('token');
    const preinfo=Cookies.get('preinfo');

    if (!token) {
        return <Navigate to={`/login`} />;
    }

    const User = jwtDecode(token);
   
    
    
    if (User && User.preinfo===true||preinfo) {
        return <Outlet />;
    } else if (User && User.preinfo === false) {
        return <Navigate to={`/startup`}/>;
    } else {
        return <Navigate to={`/login`} />;
    }
}

export default ProtectHomeRoute;
