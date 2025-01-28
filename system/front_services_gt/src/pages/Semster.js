import DeparmentC from "../component/semster/DeparmentC";
import CourseC from "../component/semster/CourseC";
import ClassC from "../component/semster/ClassC";
import EditClassC from "../component/semster/EditClassC";
import ConflictCourseC from "../component/semster/ConflictCourseC";
import TimeTeaches from "../component/semster/TimeTeaches";
import { useSelector } from "react-redux";




function Semster(){

    const department=useSelector((s)=>s.layoutsemster.department);
    const course=useSelector((s)=>s.layoutsemster.course);
    const classs=useSelector((s)=>s.layoutsemster.classs);
    const edittmeclass=useSelector((s)=>s.layoutsemster.edittmeclass);
    const conflictcourse=useSelector((s)=>s.layoutsemster.conflictcourse);
    const teachers=useSelector((s)=>s.layoutsemster.teachers);
    



    return(
        <div className=" bg-backgroundSemster bg-cover h-auto overflow-y-scroll">
            {department?<DeparmentC/>:false}
            {course?<CourseC/>:false}
            {classs?<ClassC/>:false}
            {conflictcourse?<ConflictCourseC/>:false}
            {teachers?<TimeTeaches/>:false}

        </div>
    )
}

export default Semster;