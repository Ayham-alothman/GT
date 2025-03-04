import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


function TeacherViewSemster({teacher}){
    let [ShowTeacher,setShowTeacher]=useState(false);

    function HandelShowTeacher(){
        if(ShowTeacher){setShowTeacher(false)}
        else{setShowTeacher(true)}
    }
    return(
        <div>
            <p onClick={()=>{HandelShowTeacher()}}>Teachers<MdOutlineKeyboardDoubleArrowDown /></p>
            <div className={ShowTeacher?`pl-6 text-xl text-p4`:`hidden`}>
                {teacher.map((e)=>{
                    return <p>{e.username}</p>
                })}
            </div>
        </div>
    )
}
export default TeacherViewSemster; 