import { FaWindowClose } from "react-icons/fa";


import { useState } from "react";
import DictionaryDays from "../../utility/DictionaryDays";
import HandelDataTeachrs from "../../utility/HandelTeachersData";
import Zeros from "../../utility/ZerosForShow";
import FormateOntherime from "../../utility/FormateOntherTime";
import HandelFinalDataTeachers from "../../utility/HandelFinalDataTeachers";

import { setTeachers } from "../../state/slices/SemsterSlice";
import { setViewFinal } from "../../state/slices/LayoutSmsterSlice";

import {  useDispatch, useSelector } from "react-redux";


function TimeTeaches(){

    let dispatch=useDispatch()

    //let times={ 1: [0, 1, 2, 3, 4], 2: [0, 1, 2, 3, 4, 6], 3: [0, 1, 2, 3, 4, 5, 6], }
    let times=useSelector((s)=>s.semster.times);
    //let Teachers=["teach1","teach2","teach3","teach4","teach5","teach6"];
    let [Teachers,setTeacherss]=useState(useSelector((s)=>s.semster.nameTeachers))
    const TimeTeachers=HandelDataTeachrs(Teachers,times);
    const ArrForShowOntherTime=Zeros(Object.keys(Teachers).length);
    const ontherTime=FormateOntherime(times);

    let [OnterT,setOnterT]=useState(ontherTime);

    let [ShowOntherTime,setShowOntherTime]=useState(ArrForShowOntherTime);
    let [teachers,setteachers]=useState(TimeTeachers);
    
    function ShowOrCloseWindow(ind) { 
        setShowOntherTime(prev => {
            const newArr = [...prev]; // Create a copy of the current state
            newArr[ind] = !newArr[ind]; // Toggle the value at the given index
            return newArr; // Return the updated array
        });
    }

    function ChangePeriod(teacher,first,day,period){
        
         const newOb = JSON.parse(JSON.stringify(teachers));
         let val=newOb[teacher][first][day][period][1];
         if(val==1){newOb[teacher][first][day][period][1]=0}
         else if(val==0){newOb[teacher][first][day][period][1]=1}
          
         setteachers(newOb);
    }

    function ClearAllDay(teacher,first,day){
        const newOb = JSON.parse(JSON.stringify(teachers));
      for(let Day of newOb[teacher][first][day]){
        Day[1]=false
      }
      setteachers(newOb);
    }


    function ChangePeriodTow(day,period){
        
        const newOb = JSON.parse(JSON.stringify(OnterT));
        newOb[day][period][1] = !newOb[day][period][1];
        setOnterT(newOb);
   }

   function AddOntherTime(teacher){ console.log(teacher)
    const newOb = JSON.parse(JSON.stringify(teachers));
    newOb[teacher].push(OnterT);
    setteachers(newOb);
    setOnterT(ontherTime);
    setShowOntherTime(ArrForShowOntherTime);
   }

   function SetTimeAllTeachers(){
     console.log(teachers)
     let TimeTeachers= HandelFinalDataTeachers(teachers);
     console.log(TimeTeachers)
     dispatch(setTeachers(TimeTeachers));
     dispatch(setViewFinal(true));
   }



    return(
        <div className=" min-h-svh flex flex-col">
            <div className="h-12 px-8 pt-2">
                <h1 className="text-p4 text-3xl">Select Time Teachers</h1>
            </div>

            <div className="flex-1 px-24">
                {Object.keys(teachers).map((e,indexT)=>{
                    return(
                        <div className="flex flex-col h-80  mb-3 relative">
                            <div className="h-12 bg-p4 rounded-t-xl px-10 pt-2"><p className="text-white text-2xl font-bold ">{Teachers[e]}</p></div>
                            <div className="flex-1 bg-p2  flex flex-col pl-12 pt-3 space-y-3">
                               {Object.keys(teachers[e][0]).map((D)=>{
                                const Day=DictionaryDays(D);
                                return (
                                    <div className="flex">
                                        <button onClick={()=>{ClearAllDay(e,0,D)}} className="w-36 h-8 bg-p4 text-white text-sm py-1 px-3 rounded-3xl mr-4">Clear {Day}</button>
                                        <div className="flex space-x-4">
                                            {teachers[e][0][D].map((ele,ind)=>{
                                                return (
                                                <div onClick={()=>{ChangePeriod(e,0,D,ind)}} className={ele[1]?`bg-p4 flex justify-center items-start text-white w-6 h-6 rounded-full`:`bg-red-600 flex justify-center items-start text-white w-6 h-6 rounded-full`}>{ele[0]}</div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                )
                               })}
                            </div>
                            <div className="bg-p2 rounded-b-xl flex justify-end pr-16 pb-4"><button onClick={()=>{ShowOrCloseWindow(indexT)}} className="bg-p4 w-36 h-9 text-white rounded-2xl font-normal">Add onther Time</button></div>
                            
                            <div className={ShowOntherTime[indexT]?`absolute bg-white w-full h-60 flex flex-col py-3`:`hidden`}>

                               <div className="flex justify-end px-16 "><div onClick={()=>{}} className="text-3xl text-p4"><FaWindowClose /></div></div>
                            
                               <div className="flex-1 flex flex-col space-y-3">
                                 {Object.keys(OnterT).map((D)=>{
                                     const Day=DictionaryDays(D);
                                     return (
                                         <div className="flex ">
                                             <button className="w-36 h-8 bg-p4 text-white text-sm py-1 px-3 rounded-3xl mr-4">Set {Day}</button>
                                             <div className="flex space-x-4">
                                                 {OnterT[D].map((elem,i)=>{
                                                     return (
                                                     <div onClick={()=>{ChangePeriodTow(D,i)}} className={elem[1]?`bg-p4 flex justify-center items-start text-white w-6 h-6 rounded-full`:`bg-red-600 flex justify-center items-start text-white w-6 h-6 rounded-full`}>{elem[0]}</div>
                                                     )
                                                 })}
                                             </div>
     
                                         </div>
                                     )
                                    })}
                               </div>
   
                               <div className="h-12 flex justify-end pr-10">
                                   <button onClick={()=>{AddOntherTime(e)}} className="w-24 h-8 bg-p4 rounded-full text-white">Add Time</button>
                               </div>

                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-end px-24 my-3">
                <button onClick={()=>{SetTimeAllTeachers()}} className="rounded-e-2xl bg-p4 text-white text-lg w-48 py-2 px-4">Set Time Teachres </button>

            </div>


        </div>
    )
}

export default TimeTeaches; 