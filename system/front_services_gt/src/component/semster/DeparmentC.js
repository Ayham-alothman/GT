import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

import msgErorr from '../../utility/Notfication/Erorr'

import { useState } from "react";
import DictionaryDays from "../../utility/DictionaryDays";
import ChangeFormateTime from "../../utility/ChangeFormateTime";

import { setDepartment,setTimes } from "../../state/slices/SemsterSlice";
import { setViewcourse } from "../../state/slices/LayoutSmsterSlice";
import {  useDispatch } from "react-redux";


function DeparmentC(){
    const dispatach=useDispatch();

    const AllDepart=["it","civi","arch","decor"]
    let [Depart,setDepart]=useState([]);
    let [Days,setDays]=useState({ });


   function HandelDepart(e){
    const found=Depart.includes(e.target.value);
    if(found){
        const newDepart=Depart.filter((ele)=>{
            if(ele!=e.target.value){return ele}
        })
        setDepart(newDepart);
    }
    else{setDepart([...Depart,e.target.value])}

   }



    function AddNewDay() {
        const keys = Object.keys(Days);
        if(keys.length==0){
            setDays({1:[1,1,1,1,1,1]})
        }
        else{
            const lastIndex = Number(keys[keys.length - 1]);
        
        if (lastIndex < 7) {
            const newDay = Number(lastIndex + 1);
            
            
            // Create a new object to update the state
            const newDays = {
                ...Days,
                [newDay]: [1, 1, 1, 1, 1, 1]
            };
            
            setDays(newDays);
            console.log(newDays);
        }
        }
    }
    
    function RemoveDay(key){
        delete Days[key];
        setDays({...Days});
    }
    function AddPeriod(key){
      const lenP=Days[key].length;
      if(lenP<12){
        Days[key].push(1);
        setDays({...Days});
      }
    }
    function RemovePeriod(key){
     const lenP=Days[key].length;
     if(lenP>0){
        Days[key].pop()
        setDays({...Days});
     }
    }
    function changestate(key,ind){
        const val=Days[key][ind];
        if(val==1){Days[key][ind]=0}
        else if(val==0){Days[key][ind]=1}
        setDays({...Days});
    }


    function ValditionAllData(){
    
        if(Depart.length==0){;msgErorr(`please select department`)}
        else{
            const AllDays=Object.keys(Days);
            if(AllDays.length==0){msgErorr(`must add time least one day`)}
            else{
              const times=ChangeFormateTime(Days);
              dispatach(setDepartment(Depart));
              dispatach(setTimes(times));
              dispatach(setViewcourse(true))
            }
        }
    }



    
    return(
   <div className="flex flex-col h-screen">

    <div className="flex-1 flex space-x-4 mx-6">
    <div className=" basis-2/3 flex flex-col ">
     <h1 className="text-3xl text-p4 font-bold ">open new semster</h1>
     <div className="flex-1 bg-p2    flex flex-col my-20 rounded-2xl ">
        <h1 className="h-10 bg-p4 text-white text-2xl py-1 pl-1">Select Days</h1>
        <div className="flex flex-col  mx-3 my-3">
        {Object.entries(Days).map(([day, period], index) => {
           const d= DictionaryDays(day);
                   return(<div className="flex space-x-5 ">
                    <div onClick={()=>{RemoveDay(day)}} className="text-xl text-red-800">x</div>
                    <div className="text-p4 text-xl font-semibold mr-16 w-20 mt-2">{d}:</div>
                    <div className="flex space-x-1 mt-2  ">
                     {period.map((e,i)=>{
                         return(
                             <>
                              <p onClick={()=>{changestate(day,i)}} className={e?`flex justify-center items-center text-white h-8 w-8 rounded-full bg-p4`:`flex justify-center items-center text-white h-8 w-8 rounded-full bg-red-700`} >{i+1}</p>
                             </>
                         )
                     })}
                    </div>
                    <div className="flex space-x-2 mt-4">
                     <div onClick={()=>{RemovePeriod(day)}}><FaMinus/></div>
                     <div onClick={()=>{AddPeriod(day)}}><IoMdAdd/></div>
                    </div>
                    </div>)
        })}
        </div>
        <div onClick={()=>{AddNewDay()}} className="h-10  ml-3"><button className="bg-p4 text-white rounded-full h-full w-36 flex justify-center items-center">Add New Day</button></div>
     </div>
    </div>

    <div className=" basis-1/3 h-2/3 mt-9 rounded-xl">

       <div className="flex flex-col rounded-lg h-full ">
           <div className="h-10 bg-p4 mt-6 rounded-xl py-1"><h2 className="  text-white text-2xl font-semibold pl-4 ">Select Departments</h2></div>
           <div className="flex-1 flex flex-col space-y-2 bg-p2 h-96 py-3 rounded-xl ">
            {AllDepart.map(option => (
           <div key={option} className="ml-3">
             <label className=" text-p4 text-2xl font-semibold">
               <input
                 className=" h-6 w-6 bg-p4 mr-2"
                 type="checkbox"
                 value={option}
                 checked={Depart.includes(option)}
                 onChange={HandelDepart}
               />
               {option}
             </label>
           </div>
         ))}
           </div>
       </div>

    </div>
   </div>

    <div className="h-12 flex mx-8 justify-end mb-3 "><button onClick={()=>{ValditionAllData()}} className="h-full bg-blue-800 px-6 text-white rounded-e-2xl">Transfer to Secand Stage</button></div>

   </div>
    )
}

export default DeparmentC;