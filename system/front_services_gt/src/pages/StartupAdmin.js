import { useState } from "react";
import Navbar from "../component/frequentcomponent/Navbar";
import TableAddDerpartment from "../component/TableAddDepartment";
import TableAddClassroom from "../component/TableAddClassroom";

import {AllDep} from '../component/TableAddDepartment';

import { FcDepartment } from "react-icons/fc";
import { GiMaterialsScience } from "react-icons/gi";



function StartupAdmin(){
    let [View,setView]=useState(1);

    function ControllView(num){console.log(num)
        setView(num)
    }
   
    
    return(
    <>
     <div className=" h-screen flex flex-col">
        <Navbar/>
        <div className="flex-1  flex flex-col relative ">
            <div className=" flex-1 "></div>
            <div className="flex justify-center items-end flex-1 bg-backgroundReg bg-cover">
                <div className="  w-96 h-24 mb-5 flex justify-around items-center">
                    <button onClick={()=>{ControllView(1)}} className=" text-6xl text-p4"><GiMaterialsScience /></button>
                    <button onClick={()=>{ControllView(0)}} className=" text-6xl"><FcDepartment /></button>   
                </div>
                <button className=" ml-6 mb-8 h-12 w-56 bg-p4 text-white flex justify-center items-center rounded-full" onClick={()=>{console.log(AllDep)}}>Regesration</button>
            </div>
            <div className=" absolute h-80 w-3/5  top-10 left-60 ">
                {View ? <TableAddDerpartment/> :<TableAddClassroom/>}
            </div>
        </div>

     </div>

    </>)
}


export default StartupAdmin;