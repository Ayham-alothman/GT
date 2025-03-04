import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import TeacherViewSemster from "./TeeacherViewSemster";



function CourseInfo({course}){
    let [InfoCourse,setInfoCourse]=useState(false);

    function HandelShowCourse(){
        if(InfoCourse){setInfoCourse(false)}
        else{setInfoCourse(true)}
    }
    return(
        <div className="pl-5">
            <div onClick={()=>{HandelShowCourse()}}  
                 className="text-p4 text-xl font-medium">
                 {course.course_id.nameE}<MdOutlineKeyboardDoubleArrowDown /></div>
            
            <div className={InfoCourse?`pl-6 text-xl text-p4 font-normal`:`hidden`}>
                <p>Class:{course.classroom.type}</p>
                <p>hour:{course.hours}</p>
                <p>min:{course.min}</p>
                <p>max:{course.max}</p>
                <p>Even: {course.even ? 'Yes' : 'No'}</p> 
                <p>Multi: {course.multi ? 'Yes' : 'No'}</p> 
                <p>All Same Day: {course.allSameDay ? 'Yes' : 'No'}</p>
                <p><TeacherViewSemster teacher={course.teachers}/></p>

            </div>
        </div>
    )
}
export default CourseInfo