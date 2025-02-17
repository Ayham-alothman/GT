import Navbar from "../component/frequentcomponent/Navbar";

import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode';
import { useEffect, useState } from "react";

import Erorr from "../utility/Notfication/Erorr";

import APIServerData from "../utility/InitApierverData";

function ViewCourse(){
    let {permision,depart,forUniversity}=jwtDecode(Cookies.get(`token`));
    let [AllCourse,setAllcourse]=useState([]);
    let [Depart,setDepart]=useState([]);
    const [courses,setViewcourses] = useState([]);
    
    useEffect(()=>{
        const getAlldepart=async ()=>{
          try{
            if(permision==1){
              const Req=await APIServerData.post('/depart/getdeparts',{idUni:forUniversity});
              
              setDepart(Req.data);
            }
            else{
              setDepart(depart);
            }
            const ReqCourse=await APIServerData.post('/course/getcourseforuni',{idUni:forUniversity  })
            console.log(ReqCourse);
            setAllcourse(ReqCourse.data);
            setViewcourses(ReqCourse.data)
          }
          catch(e){Erorr(e)}
        }
        getAlldepart();
    },[])
  
    function FilterCourse(idDepart){
      console.log(idDepart);
      if(idDepart==`all`){setViewcourses(AllCourse)}
      else{
        let CourseFilter=AllCourse.filter((e)=>{
          if(e.department_id._id==idDepart){
            return e
          }
        })
        setViewcourses(CourseFilter);
      }

    }
    


    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <div className="my-5">
                <div className="flex justify-center mb-3">
                  <p className="text-p4 text-3xl font-semibold mr-2">select department:</p>
                  <select onChange={(e)=>{FilterCourse(e.target.value)}}>
                    <option value={`all`}>All</option>
                    {Depart.map((e)=>{
                      return(<option value={e._id}>{e.username}</option>)
                    })}
                  </select>
                </div>
                <div className="flex justify-center items-center"><button className="bg-p4 rounded-xl w-44 h-8 text-white text-xl font-light">Filter Course</button></div>

            </div>
            <div className="flex-1 overflow-y-scroll">
                <div className="container mx-auto p-4 text-p4">
                  <h1 className="text-2xl font-bold mb-4">Course List</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map(course => (
                      <div key={course._id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold">{course.nameE} ({course.code})</h2>
                        <p><strong>Year:</strong> {course.year}</p>
                        <p><strong>Semester:</strong> {course.semester}</p>
                        <p><strong>Department:</strong> {course.department_id.username}</p>
                        <p><strong>Hours:</strong> {course.hours}</p>
                        <p><strong>prerequisite:</strong> {course.prerequisite}</p>

                        <p><strong>Description:</strong> {course.descriptionE}</p>
                        <p><strong>Classroom :</strong> {course.classroom.type}</p>

                      </div>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    )
}

export default ViewCourse;


//department_id: Object { _id: "67ae1f958cbb5a066add3288", username: "it", university_id: "67a8aa01b508c84ed5f1fc2a", … }