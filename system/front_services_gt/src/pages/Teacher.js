import { useState } from "react";
import Navbar from "../component/frequentcomponent/Navbar";

import AddTeacher from "../component/Teacher/AddTeacher";
import DeleteTeacher from "../component/Teacher/DeleteTeachers";


function Teacher(){

    let [ShowWindo,setShowWindo]=useState(0);

    return(
        <div className="h-screen flex flex-col px-4 pt-4">
            <Navbar/>
            <div className="text-p4 text-3xl font-bold  ">Teachers</div>
            <div className="flex justify-center space-x-3">
                <button className=" px-5 py-3 bg-p4 text-white flex justify-center items-center rounded-2xl" onClick={()=>{setShowWindo(1)}}>Add Teacher</button>
                <button className=" px-5 py-3 bg-p4 text-white flex justify-center items-center rounded-2xl" onClick={()=>{setShowWindo(2)}}>Remove Teacher</button>

            </div>

            <div className="flex-1">
                {ShowWindo==1?<AddTeacher/>:false}
                {ShowWindo==2?<DeleteTeacher/>:false}

            </div>

        </div>
    )

}

export default Teacher;