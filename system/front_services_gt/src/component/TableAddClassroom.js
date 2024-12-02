  import { useState } from "react";
  import { useSelector, useDispatch } from 'react-redux';
  import {AddClassroom,DeleteClassroom} from '../state/slices/StartupAdminData'


  import { IoMdCloseCircleOutline } from "react-icons/io";


  function TableAddClassroom(){ 

      const ClassroomS=useSelector(s=>s.startupAdmin.Classroom);
      const usedispatch=useDispatch();

      let [Classroom,setClassroom]=useState([]);
      let [DisplayAddClass,setDisplayAddClass]=useState(0);

      let [CountClassroom,setCountClassroom]=useState("");
      let [TypeClassroom,setTypeClassroom]=useState("");
      let [Capacity,setCapacity]=useState("");

      function AddClassRoom(){
          if(CountClassroom.length!=0&&TypeClassroom.length!=0&&Capacity.length!=0){
              usedispatch(AddClassroom({count:CountClassroom,type:TypeClassroom,capacity:Capacity}))
              setClassroom([...Classroom,{count:CountClassroom,type:TypeClassroom,capacity:Capacity}]);
              setCountClassroom('');
              setTypeClassroom('');
              setCapacity('');
              setDisplayAddClass(0);
          }
          else{alert(`there miss data`)}
      }

      function RemovEle(i){
        
        usedispatch(DeleteClassroom(i))
        
      }

      return(
      <>
      <div className="h-full flex flex-col relative">
          <div className=" h-16 flex justify-end items-center mb-2 ">
              <button className=" w-44 mr-6 h-12 rounded-full bg-p4 text-white" onClick={()=>{setDisplayAddClass(1)}}>Add new classroom</button>
          </div>
          <div className="flex-1 flex flex-col">
              <div className="flex flex-row justify-between items-center h-10 bg-p4 ">
                <div className=" flex justify-center items-center h-full w-full text-white ">Count classroom</div>
                <div className=" flex justify-center items-center h-full w-full text-white ">Type</div>
                <div className=" flex justify-center items-center h-full w-full text-white ">Capacity</div>
                <div className=" flex justify-center items-center h-full w-full text-white ">Action</div>
              </div>

              <div className=" flex-1 overflow-y-scroll flex flex-col">

                  {ClassroomS.map((e,i)=>{
                      return(
                          <div className="h-10 flex flex-row justify-between">
                            <div className=" h-full flex justify-center items-center bg-p3 flex-1 text-p4">{e.count}</div>
                            <div className=" h-full flex justify-center items-center bg-p2 flex-1 text-p4">{e.type}</div>
                            <div className=" h-full flex justify-center items-center bg-p3 flex-1 text-p4">{e.capacity}</div>
                            <div className=" h-full flex justify-center items-center bg-p2 flex-1 text-p4"><button className="bg-red-500 px-4 rounded-full text-white"
                            onClick={(e)=>{e.preventDefault();RemovEle(i)}}>Remove</button></div>
                          </div>
                      )
                  })}

                  

                
                  

              </div>

          </div>



          <div className={DisplayAddClass?`absolute left-0 top-0 w-full h-72 bg-p2 px-2 pt-2 pb-1 flex flex-col`:`hidden`}>
              <div className=" h-8 flex justify-end items-center text-3xl text-p4" onClick={()=>{setDisplayAddClass(0)}}><IoMdCloseCircleOutline /></div>
              <div className="h-10 text-2xl font-semibold text-p4"><p>Add classroom</p></div>
              <div className="flex-1 flex">
                
                <div className="flex flex-col h-full w-full space-y-1">
                  <p className="pl-2 text-lg text-p4 font-medium">Count classroom</p>
                  <input className={` w-60 pl-2  h-9 rounded-xl`} placeholder='only numbers' 
                  value={CountClassroom} onChange={(e)=>{e.preventDefault();setCountClassroom(e.target.value)}}></input>
                </div>   
                

                <div className="flex flex-col h-full w-full space-y-1">
                  <p className="pl-2 text-lg text-p4 font-medium">Type</p>
                  <input className={` w-60 pl-2  h-9 rounded-xl`} placeholder='only letters'
                  value={TypeClassroom} onChange={(e)=>{e.preventDefault();setTypeClassroom(e.target.value)}}></input>
                </div>   

              </div>
              
              <div className="flex-1   ">
            
                  <div className="flex flex-col h-full w-full space-y-1">
                    <p className="pl-2 text-lg text-p4 font-medium">Capacity Classroom</p>
                    <input className={` w-60 pl-2  h-9 rounded-xl`} placeholder='only numbers'
                    value={Capacity} onChange={(e)=>{e.preventDefault();setCapacity(e.target.value)}}></input>
                  </div>   

              </div>
              
              <div className="h-12   px-14 flex items-center justify-end space-x-2">
                  <button className="w-44 h-8 px-1 py-1 text-base font-semibold text-p4 rounded-xl border-2 border-p4 flex items-center justify-center hover:bg-p4 hover:text-white "
                  onClick={(e)=>{e.preventDefault();setDisplayAddClass(0)}}>cancel</button>
                  <button className="w-44 h-8 px-1 py-1 text-base font-semibold text-p4 rounded-xl border-2 border-p4 flex items-center justify-center hover:bg-p4 hover:text-white "
                  onClick={(e)=>{e.preventDefault();AddClassRoom()}}>Done</button>

                  
              </div>
              
          </div>




      </div>
      </>
      )
  }

  export default TableAddClassroom ;
