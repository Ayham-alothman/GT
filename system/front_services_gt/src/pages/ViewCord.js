import Navbar from "../component/frequentcomponent/Navbar";

import { useState } from "react";

function ViewCord(){

    const [admins,setadmins] = useState([
        {
          id: '1',
          username: 'admin1',
          depart: [
            { _id: 'd1', name: 'Department A', write: true },
            { _id: 'd2', name: 'Department B', write: false },
          ],
        },
        {
          id: '2',
          username: 'admin2',
          depart: [
            { _id: 'd3', name: 'Department C', write: true },
            { _id: 'd4', name: 'Department D', write: true },
          ],
        },
        {
          id: '3',
          username: 'admin3',
          depart: [
            { _id: 'd5', name: 'Department E', write: false },
            { _id: 'd6', name: 'Department F', write: true },
          ],
        },
      ]);

    return(
        <div className="h-screen flex-col">
            <Navbar/>
            <div className="flex-1">
                
                <div className="p-4 text-p4">
                     <h1 className="text-2xl font-bold mb-4">Admins List</h1>
                     <ul className="space-y-4">
                       {admins.map((admin) => (
                         <li key={admin.id} className="border p-4 rounded-lg shadow-md">
                           <h2 className="text-xl font-semibold">{admin.id}</h2>
                           <h2 className="text-xl font-semibold">{admin.username}</h2>
                           <ul className="mt-2">
                             {admin.depart.map((dep) => (
                               <li key={dep._id} className="flex justify-between">
                                 <span>{dep.name}</span>
                                 <span className={`text-${dep.write ? 'green' : 'red'}-500`}>
                                   {dep.write ? 'Writable' : 'Read Only'}
                                 </span>
                               </li>
                             ))}
                           </ul>
                         </li>
                       ))}
                     </ul>
                </div>
                
            </div>

        </div>
    )
}

export default ViewCord;