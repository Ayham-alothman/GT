import Navbar from "../component/frequentcomponent/Navbar";

import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode';
import { useEffect, useState } from "react";

import APIServerData from "../utility/InitApierverData";

import Sucsess from '../utility/Notfication/Sucsess';
import Erorr from '../utility/Notfication/Erorr';


function ViewTeacher(){
    
  const {permision,depart,forUniversity}=jwtDecode(Cookies.get(`token`));    
    
    let [AllTeachers,setAllTeachers]=useState([]);
    let [ViewTeacher,setViewTeacher]=useState([]);
    let [Depart,setDepart]=useState([]);

    let [SelectDepart,setSelectDepart]=useState(``);

    
    useEffect(()=>{
        const GetDepart=async ()=>{
          try{
            const ReqDepart=await APIServerData.post(`/depart/getdeparts`,{idUni:forUniversity});
            setDepart(ReqDepart.data);
            console.log(ReqDepart.data)

          }
          catch(e){Erorr(e)}
        }
        GetDepart()
    },[])

    useEffect(()=>{
      if(Depart.length>0){setSelectDepart(Depart[0]._id)}
    },[Depart])

    
    useEffect(()=>{
      const getTeacher=async ()=>{
        try{
          const ReqTeacher=await APIServerData.post(`/teacher/getallteacher`,{idUni:forUniversity,idDepart:SelectDepart});
          setViewTeacher(ReqTeacher.data);
        }
        catch(e){Erorr(e)}
      }
      if(SelectDepart.length>1){
        getTeacher();
      }
    },[SelectDepart])

    


    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <div className="my-5">
                <div className="flex justify-center mb-3">
                  <p className="text-p4 text-3xl font-semibold mr-2">select department:</p>
                  <select value={SelectDepart} onChange={(e)=>{setSelectDepart(e.target.value)}}>
                    
                    {Depart.map((e)=>{
                      return(<option value={e._id}>{e.username}</option>)
                    })}
                  </select>
                </div>
                <div className="flex justify-center items-center"><button className="bg-p4 rounded-xl w-44 h-8 text-white text-xl font-light">Filter teachers</button></div>

            </div>
            <div className="flex-1">
                
                <div className="container mx-auto p-4 text-p4">
                   <h1 className="text-2xl font-bold mb-4">Teachers List</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {ViewTeacher.map(user => (
                       <div key={user._id} className="border rounded-lg p-4 shadow-md">
                         <h2 className="text-xl font-semibold">{user.username}</h2>
                         <p><strong>ID:</strong> {user._id}</p>
                       </div>
                     ))}
                   </div>
                </div>
                
            </div>
        </div>
    )
}

export default ViewTeacher;