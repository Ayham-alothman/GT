import { useSelector } from "react-redux";
import InstanceAxios from "../../utility/initRequestApi";

function FinalRegistration(){

    let halls=useSelector((s)=>s.semster.halls);
    let times=useSelector((s)=>s.semster.times);
    let timeHalls=useSelector((s)=>s.semster.timeHalls);
    let subjectConflicts=useSelector((s)=>s.semster.subjectConflicts);
    let subjects=useSelector((s)=>s.semster.subjects);
    let teachers=useSelector((s)=>s.semster.teachers);
    let NameTeachers=useSelector((s)=>s.semster.nameTeachers);

    async function SendData(){
        try{
           await InstanceAxios
           .post('/any',{halls,times,timeHalls,subjectConflicts,subjects,teachers,NameTeachers});
        }
        catch(e){}

    }

    return(
        <div className=" h-32 flex justify-center items-center px-40">
         <button onClick={()=>{SendData()}} className="w-full text-3xl rounded-xl h-20 bg-p4 text-white flex justify-center items-center">
            Generate Table
         </button>
        </div>
    )
}

export default FinalRegistration;