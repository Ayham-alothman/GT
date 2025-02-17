import { useState } from "react";
import { useSelector, } from 'react-redux'

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import Navbar from "../component/frequentcomponent/Navbar";
import TableAddDerpartment from "../component/TableAddDepartment";
import TableAddClassroom from "../component/TableAddClassroom";


import { FcDepartment } from "react-icons/fc";
import { GiMaterialsScience } from "react-icons/gi";

import ApiServerUser from "../utility/initRequestApi";
import APIServerData from "../utility/InitApierverData";

import Sucsess from '../utility/Notfication/Sucsess';
import Erorr from '../utility/Notfication/Erorr'
import { useNavigate } from "react-router-dom";



function StartupAdmin(){

    const Navigate=useNavigate();

    const {forUniversity}=jwtDecode(Cookies.get(`token`));
    const {_id}=jwtDecode(Cookies.get(`token`));
    const Department=useSelector(s=>s.startupAdmin.Department);
    const ClassroomS=useSelector(s=>s.startupAdmin.Classroom); 
    let [View,setView]=useState(1);

    function ControllView(num){
        setView(num)
    }

    async function AddDepartmentAndClass(){
        try{
            if(forUniversity&&_id&&Department.length>0&&ClassroomS.length>0){

            const ReqDepart=await APIServerData
            .post('/depart/addgroup',{departs:Department,idUni:forUniversity},{withCredentials:true});
            if(ReqDepart.status==200||201){
                const ReqClass=await APIServerData.
                post('/class/addgroup',{ClassUni:ClassroomS,idUni:forUniversity});
                if(ReqClass.status==200||201){
                   const ReqChangePreInfo=await ApiServerUser.
                    post('/user/changepreinfo',{idAdmin:_id});
                    if(ReqChangePreInfo.status==200||201){
                        Cookies.set(`preinfo`,true);
                        Navigate('/');
                        Sucsess(`the Depratment and Class set`);

                    }
                    else{
                        Erorr(`there problem in requestset change state admin`)
                       }
                }
                else{
                    Erorr(`there problem in requestset class`)
                   }
            }
            else{
                Erorr(`there problem in requestset depart`)
               }
           }
           else{
            Erorr(`there miss data in data set`)
           }
           
        }
        catch(e){console.log(e)}

    }
   
    
    return(
    <>
     <div className=" h-screen flex flex-col">
        <Navbar name="startup"/>
        <div className="flex-1  flex flex-col relative ">
            <div className=" flex-1 "></div>
            <div className="flex justify-center items-end flex-1 bg-backgroundReg bg-cover">
                <div className="  w-96 h-24 mb-5 flex justify-around items-center">
                    <button onClick={()=>{ControllView(1)}} className=" text-6xl text-p4"><GiMaterialsScience /></button>
                    <button onClick={()=>{ControllView(0)}} className=" text-6xl"><FcDepartment /></button>   
                </div>
                <button onClick={()=>{AddDepartmentAndClass()}} className=" ml-6 mb-8 h-12 w-56 bg-p4 text-white flex justify-center items-center rounded-full" >Regesration</button>
            </div>
            <div className=" absolute h-80 w-3/5  top-10 left-60 ">
                {View ? <TableAddDerpartment/> :<TableAddClassroom/>}
            </div>
        </div>

     </div>

    </>)
}


export default StartupAdmin;