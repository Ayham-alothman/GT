import { useState } from "react";

function TableAddClassroom(){ 
    let [Classroom,setClassroom]=useState([]);

    return(
    <>
     <div className="h-full flex flex-col relative">
        <div className=" h-16 flex justify-end items-center mb-2 ">
            <button className=" w-44 mr-6 h-12 rounded-full bg-p4 text-white">Add new classroom</button>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex flex-row justify-between items-center h-10 bg-p4 ">
               <div className=" flex justify-center items-center h-full w-full text-white ">Count classroom</div>
               <div className=" flex justify-center items-center h-full w-full text-white ">Type</div>
               <div className=" flex justify-center items-center h-full w-full text-white ">Capacity</div>
               <div className=" flex justify-center items-center h-full w-full text-white ">Action</div>
            </div>

            <div className=" flex-1 overflow-y-scroll flex flex-col">

                <div className="h-10 flex flex-row justify-between">
                    <div className=" h-full flex justify-center items-center bg-p3 flex-1 text-p4">1</div>
                    <div className=" h-full flex justify-center items-center bg-p2 flex-1 text-p4">2</div>
                    <div className=" h-full flex justify-center items-center bg-p3 flex-1 text-p4">3</div>
                    <div className=" h-full flex justify-center items-center bg-p2 flex-1 text-p4"><button className="bg-red-500 px-4 rounded-full text-white">Remove</button></div>
                </div>

                

            </div>

        </div>



        <div className=" absolute left-0 top-0 w-96 h-72 bg-p3">
            
        </div>




     </div>
    </>
    )
}

export default TableAddClassroom ;