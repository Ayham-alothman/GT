import { useState } from "react";

function ConflictCourseC(){
    let [Courses,setCourses]=useState(['course1','course2','course3','course5']);
    let [SelectCourse,setSelectCourse]=useState([]);
    let [Per,setPer]=useState('0%');
    let [Group,setGroup]=useState({});
    


    function AddGroup(){
        let NumberGroup=Object.keys(Group).length;
        Group[NumberGroup]={per:Per,course:SelectCourse};
        setGroup({...Group});
        setSelectCourse([]);
        setPer('0%');
    }

    function handelPer(element){
        setPer(element)
    }

    function AddOrRemoveCourse(element){
        if(SelectCourse.includes(element)){
            let newSelectCourse=SelectCourse.filter((e)=>{
                if(e!=element){return e}
            })
            setSelectCourse(newSelectCourse)
        }
        else{
            setSelectCourse([...SelectCourse,element]);
        }
    }

    
    return(
       <div className="h-screen ">
        
        <div className=" w-full h-full py-16  px-36 flex ">
            <div className="h-full flex-1   flex flex-col ">
              <div className="h-16 bg-p4 rounded-2xl flex justify-center items-center">
                <p className="text-white text-lg ">Select Courses</p>
              </div>
              <div className="flex-1  bg-p2 rounded-2xl overflow-y-scroll">
                {Courses.map((e)=>{
                    return(
                        <div className=" h-10 mb-1 flex justify-center items-center space-x-6">
                            <div>
                                <input className="w-6 h-6" type="checkbox"
                                checked={SelectCourse.includes(e)}
                                onChange={()=>{AddOrRemoveCourse(e)}}></input>
                            </div>
                            <div className="text-p4 font-semibold text-xl">{e}</div>
                        </div>
                    )
                })}
              </div>
            </div>
            <div className="w-16"></div>
            <div className="h-full flex-1  rounded-2xl flex flex-col">
                <div className="h-24 bg-p4 flex justify-around items-center">
                    <button onClick={()=>{AddGroup()}} className="bg-p3 text-white w-24 h-12 rounded-full">Add Group</button>
                    <p className="text-white ml-8">select percentage</p>
                    <select value={Per} onChange={(e)=>{handelPer(e.target.value)}}>
                        <option value={"0%"}>0%</option>
                        <option value={"10%"}>10%</option>
                        <option value={"20%"}>20%</option>
                        <option value={"30%"}>30%</option>
                        <option value={"40%"}>40%</option>
                        <option value={"50%"}>50%</option>
                        <option value={"60%"}>60%</option>
                        <option value={"70%"}>70%</option>
                        <option value={"80%"}>80%</option>
                        <option value={"90%"}>90%</option>
                        <option value={"100%"}>100%</option>

                    </select>
                </div>
                <div className="flex-1 bg-p2 flex flex-col overflow-y-scroll ">
                    {Object.keys(Group).map((key)=>{
                        return(
                            <div className="h-auto w-full flex flex-col text-p4 text-xl font-light">
                                <div className="flex justify-around items-center border-b-2 border-p4">
                                    <p>Group{key}</p>
                                    <p>percentage:{Group[key].per}</p>
                                </div>
                                <div className="flex flex-col border-b-2 border-p4">
                                    {Group[key].course.map((cou)=>{
                                        return (<div className="flex justify-center  ">{cou}</div>)
                                    })}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

       </div>
    )
}

export default ConflictCourseC;