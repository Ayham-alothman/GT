import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";

import { useDispatch,useSelector } from "react-redux";

import { setAllclass,setHalls,setSujects,setnameTeachers,setAllcourse,setAllteachersR } from "../../state/slices/SemsterSlice";
import { setViewclass } from "../../state/slices/LayoutSmsterSlice";

import Halls from "../../utility/CountTypeClassToSet";

import CompainT from '../../utility/CompainNameTeachers';

import APIServerData from "../../utility/InitApierverData";


import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";






function CourseC(){
   
    let dispatch=useDispatch();
    const { forUniversity } = jwtDecode(Cookies.get(`token`));
    let department=useSelector((s)=>s.semster.department);


    let [AllCoursee,setAllCoursee]=  useState([]);
    let [AllTeachers,setAllTeachers]=useState([]);
    let [AllTypeClass,setAllTypeClass]=useState([]);
    
    let [AllCourse,setAllCourse]=useState(AllCoursee)
    let [CourseSelected,setCourseSelected]=useState({});
    let [TeachersSelected,setTeachersSelected]=useState([])

    let [CurCourse,setCurCourse]=useState(AllCourse[0]);
    let [MinCourse,setMinCourse]=useState(2);
    let [MaxCourse,setMaxCourse]=useState(2);
    let [HourseCourse,setHourseCourse]=useState(3);
    let [TypeClass,setTypeClass]=useState(AllTypeClass[0]);
    let [CurTeachers,setCurTeachers]=useState(AllTeachers[0]);

    let [StartCheck,setStartCheck]=useState(false);
    let [MultiCheck,setMultiCheck]=useState(false);
    let [PossbleCheck,setPossbleCheck]=useState(false);
    let [AllDayCheck,setAllDayCheck]=useState(false);


    useEffect(()=>{
      const GetCourseAndTeacherAndClass=async()=>{
       try{
        const ReqCourse=await APIServerData.post(`/course/getcoursefordepart`,
        {idUni:forUniversity,Depart:department});
        let AllTeachrReq=[];
        for(let oneDepart of department){
          let ReqDepart= await APIServerData.post(`teacher/getallteacher/`,
          {idUni:forUniversity,idDepart:oneDepart});
          AllTeachrReq=[...AllTeachrReq,...ReqDepart.data];
        }
        const ReqClass=await APIServerData.post(`/class/getallclass`,{idUni:forUniversity})
        console.log(ReqCourse.data,ReqClass.data,AllTeachrReq);
        let C = ReqCourse.data.map((e) => e.nameE);
        let T=AllTeachrReq.map((e)=>{return e.username});
        let Claaa=ReqClass.data.map((e)=>{return e.type});
        setAllCoursee(C);
        setAllTeachers(T);
        setAllTypeClass(Claaa);
        dispatch(setAllcourse(ReqCourse.data))
        dispatch(setAllteachersR(AllTeachrReq))
        dispatch(setAllclass(ReqClass.data))
       }
       catch(e){console.log(e)}
      }
      GetCourseAndTeacherAndClass()
    },[])

    useEffect(()=>{setAllCourse(AllCoursee)},[AllCoursee]);
    useEffect(()=>{setCurCourse(AllCourse[0])},[AllCourse])
    useEffect(()=>{setTypeClass(AllTypeClass[0])},[AllTypeClass]);
    useEffect(()=>{setCurTeachers(AllTeachers[0])},[AllTeachers]);

    function HandelCureentCourse(value){
      setCurCourse(value)
    }
    function HandelTypeClass(value){
      setTypeClass(value)
    }
    function HandelTeachers(value){
      setCurTeachers(value)
    }


    function HandelStartCheck(event){
      setStartCheck(event.target.checked)
    }
    function HandelMultiCheck(event){
      setMultiCheck(event.target.checked)
    }
    function HandelPossibleCheck(event){
      setPossbleCheck(event.target.checked)
    }
    function HandelAllDayCheck(event){
      setAllDayCheck(event.target.checked)
    }


    function AddTeachersSelect(name) { 
      let indexele = AllTeachers.findIndex((e) => e === name);
      if (indexele !== -1) {
          setTeachersSelected([...TeachersSelected, indexele]);
          setCurTeachers(AllTeachers[0]); // Reset to the first teacher after adding
      }
  }
  
  function AddNewCourse() {
    let newOb = {};
    let nameCourse = CurCourse;
    let propertys = {};

    propertys[`hall`] = TypeClass;
    propertys[`hours`] = HourseCourse;
    propertys[`max`] = MaxCourse;
    propertys[`min`] = MinCourse;
    propertys[`allSameDay`] = AllDayCheck;
    propertys[`teachers`] = TeachersSelected;
    propertys[`multi`] = MultiCheck;
    propertys[`onlyEven`] = StartCheck;

    newOb[nameCourse] = propertys;
    setCourseSelected({ ...CourseSelected, ...newOb });

    // Resetting to defaults for the next course
    setTeachersSelected([]);
    setMinCourse(2);
    setMaxCourse(2);
    setHourseCourse(3);
    setTypeClass(AllTypeClass[0]);
    setCurTeachers(AllTeachers[0]);

    setStartCheck(false);
    setMultiCheck(false);
    setPossbleCheck(false);
    setAllDayCheck(false);

    // Resetting the current course to the first course
    let newArrC = AllCourse.filter((e) => e !== CurCourse);
    setAllCourse(newArrC);
    setCurCourse(newArrC[0] || AllCourse[0]); // Ensure there's always a course selected
}


    function SetAllCourses(){
      const Hall=Halls(CourseSelected);
       
      dispatch(setHalls(Hall));
      dispatch(setSujects(CourseSelected));
      let MapTeachers=CompainT(CourseSelected,AllTeachers);
      console.log(MapTeachers);
      dispatch(setnameTeachers(MapTeachers));
      dispatch(setViewclass(true));
    }



    return(
        <div className="h-screen flex flex-col">
            <div className=" h-12">
                <h1 className="ml-5 text-3xl text-p4 font-bold">Add Course</h1>
            </div>

            <div className=" h-28 flex justify-between px-20 text-lg font-light text-p4">
              <div>
                <div className="mb-3">select course "Name English"</div>
                <select value={CurCourse} onChange={(e)=>{HandelCureentCourse(e.target.value)}} className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                 {AllCourse.map((e,i)=>{
                  return(<option value={e}>{e}</option>)
                 })}
                
               </select>
              </div>
              
              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                   Min number class
                 </label>
                 <input
                   value={MinCourse}
                   onChange={(e)=>{setMinCourse(e.target.value)}}
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>

              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                 Max number class
                 </label>
                 <input
                   value={MaxCourse}
                   onChange={(e)=>{setMaxCourse(e.target.value)}}
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>

              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                   Hourse course
                 </label>
                 <input
                   value={HourseCourse}
                   onChange={(e)=>{setHourseCourse(e.target.value)}}
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>




            </div>



            <div className=" h-36 flex justify-between px-20 text-xl text-p4 font-light ">

               <div className=" ">
                 <div className="mb-3">Type class</div>
                 <select value={TypeClass} 
                 onChange={(e)=>{HandelTypeClass(e.target.value)}} 
                 className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                  {AllTypeClass.map((e)=>{
                    return(
                      <option value={e}>{e}</option>    
                    )
                  })}
                  
                 </select>
               </div>
               
               <div className="  flex flex-col justify-around text-xl text-p4 font-light">
                <div className="flex space-x-4">

                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={StartCheck}
                       onChange={HandelStartCheck}
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">start with individual period</p>
                   </div> 


                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={MultiCheck}
                       onChange={HandelMultiCheck}
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">Multi teacher</p>
                   </div> 
                 
                </div>

                <div className="flex space-x-4">
                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={PossbleCheck}
                       onChange={HandelPossibleCheck}
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">Possibilty of conflict lab</p>
                   </div> 


                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       checked={AllDayCheck}
                       onChange={HandelAllDayCheck}
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">All same day</p>
                   </div> 
                </div>
               </div>  
           
            </div>

            <div className=" h-20 flex justify-between px-20 items-center text-p4">

               <div className="flex space-x-4 ">
                <div>
                <div className="mb-1">name teachers</div>
                 <select value={CurTeachers} 
                 onChange={(e)=>{HandelTeachers(e.target.value)}} 
                 className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                  {AllTeachers.map((e)=>{
                    return(<option value={e}>{e}</option>)
                  })}
                  
                 </select>

                </div>
                <div className="flex items-center">
                    <p onClick={()=>{AddTeachersSelect(CurTeachers)}} className=" text-2xl"><IoSend /></p>
                </div>
               </div>

               
               <div  className="h-10 w-28  "> <button onClick={()=>{AddNewCourse()}} className="w-full h-full bg-blue-700 text-white rounded-3xl">Save</button> </div>

            </div>

            <div className="ml-20 flex-1 flex  ">
                <div className="w-72 h-full flex flex-col  mr-2">
                    <div className="bg-p4 w-full h-10 flex items-center justify-center text-white rounded-xl">name techers</div>
                    <div className="flex-1 bg-white">
                      {TeachersSelected.map((e)=>{
                        return(<div className="border-b-2 border-p4 flex justify-center">{AllTeachers[e]}</div>)
                      })}
                        
                    </div>
                </div>
                <div className=" flex-1  flex flex-col ">
                    <div className=" bg-p4 h-14  rounded-xl flex justify-around items-start text-white p-2">
                        <div>name course</div>
                        <div>min class</div>
                        <div>max class</div>
                        <div>type class</div>
                        
                    </div>
                    <div className=" bg-white h-full w-full rounded-xl overflow-y-scroll">

                      {Object.keys(CourseSelected).map((k)=>{
                        return(
                          <div className="flex justify-around items-center border-b-2 border-p4">
                            <div>{k}</div>
                            <div>{CourseSelected[k].min}</div>
                            <div>{CourseSelected[k].max}</div>
                            <div>{CourseSelected[k].hall}</div>
                          </div>
                        )
                      })}
                        
                    </div>
                </div>
                <div className=" w-60 flex items-end justify-center    ">
                    <button onClick={()=>{SetAllCourses()}} className=" w-44 bg-p4 h-12 text-white rounded-2xl">Set All Courses</button>
                </div>
            </div>
            
            <div className="h-3"></div>

        </div>
   )
}

export default CourseC;