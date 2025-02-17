import { useEffect, useState } from "react";
import APIServerData from "../utility/InitApierverData";
import Navbar from "../component/frequentcomponent/Navbar";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function ViewDepart() {
    const { forUniversity } = jwtDecode(Cookies.get(`token`));
    let [departments, setDepartments] = useState([]);

    useEffect(() => {
        const GetDeparts = async () => {
            try {
                const Req = await APIServerData.post('/depart/getdeparts', { idUni: forUniversity });
                setDepartments(Req.data);
            } catch (e) {
                console.log(e);
            }
        };
        GetDeparts();
    }, []);

    return (
        <div className="h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-6 text-p4 ">
                <h1 className="text-2xl font-bold mb-4">Departments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map(department => (
                        <div key={department._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="font-semibold text-lg">Department ID:</h2>
                            <p className="text-gray-700">{department._id}</p>
                            <h2 className="font-semibold text-lg">Username:</h2>
                            <p className="text-gray-700">{department.username}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewDepart;
