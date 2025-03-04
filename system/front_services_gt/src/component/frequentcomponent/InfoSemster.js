import { useState } from "react";
import { FcDepartment } from "react-icons/fc";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import DictionaryDays from "../../utility/DictionaryDays";
import CourseInfo from "./CourseInfo";




function InfoSemster({semster}){
    let [AllInfo,setAllInfo]=useState(false);
    let [ShowDepart,setShowDepart]=useState(false);
    let [ShowCourse,setShowCourse]=useState(false);
    let [ShowTime,setShowTime]=useState(false);

    function handelAllinfo(){
        if(AllInfo){setAllInfo(false)}
        else{setAllInfo(true)}
    }
    function handelShowDepart(){
        if(ShowDepart){setShowDepart(false)}
        else{setShowDepart(true)}
    }
    function handelShowCourse(){
        if(ShowCourse){setShowCourse(false)}
        else{setShowCourse(true)}
    }
    function handelShowTime(){
        if(ShowTime){setShowTime(false)}
        else{setShowTime(true)}
    }
    function DownloadFile(DataFile) {
        // Check if DataFile is in the expected format
        if (DataFile && DataFile.type === 'Buffer' && Array.isArray(DataFile.data)) {
            // Convert the buffer to a Uint8Array
            const byteArray = new Uint8Array(DataFile.data);
            
            // Create a Blob from the byte array
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
            // Create a link to download the Blob
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'downloaded_file.xlsx'); // Specify the file name
            document.body.appendChild(link);
            link.click();
            link.remove(); // Clean up the link element
            window.URL.revokeObjectURL(url); // Free up memory
        } else {
            console.error('Invalid DataFile format');
        }
    }
    

    return(
        <div className="flex flex-col px-8" >
          <div className=" bg-p4 text-white h-12 w-96 rounded-2xl px-6 text-xl font-semibold" onClick={()=>{handelAllinfo()}}>{semster.Date}</div>
          <div className={AllInfo?`flex flex-col space-y-3 `:` hidden`}>
            
            <div className="flex flex-col  h-auto ">
             <div className="text-xl text-p4 font-bold" onClick={()=>{handelShowDepart()}}>Show Depart<MdOutlineKeyboardDoubleArrowDown /></div>
             <div className={ShowDepart?`flex flex-col pl-3 space-y-2`:`hidden`}>
                {semster.Department.department_id.map((e)=>{
                    return(
                        <div className=" flex space-x-2 text-3xl ">
                            <p><FcDepartment /></p> 
                            <p className="text-p4">{e.username}</p>
                        </div>
                    )
                })}

             </div> 
            </div>
            
            <div className="flex flex-col ">
             <div className="text-xl text-p4 font-bold" onClick={()=>{handelShowTime()}}>Show Time<MdOutlineKeyboardDoubleArrowDown /></div>
             <div className={ShowTime?`flex flex-col space-y-2`:`hidden`}>

               {Object.keys(semster.Time).map((D)=>{
                    const Day=DictionaryDays(D);
                       return (
                           <div className="flex">
                               <button  className="w-36 h-8 bg-p4 text-white text-sm py-1 px-3 rounded-3xl mr-4"> {Day}</button>
                               <div className="flex space-x-4">
                                   {semster.Time[D].map((ele,ind)=>{
                                       return (
                                       <div  className={ele[1]?`bg-p4 flex justify-center items-start text-white w-6 h-6 rounded-full`:`bg-p4 flex justify-center items-start text-white w-6 h-6 rounded-full`}>{ele}</div>
                                       )
                                   })}
                               </div>
                           </div>
                       )
                  })}

             </div>
            </div>

            <div className="flex flex-col ">
             <div className="text-xl text-p4 font-bold" onClick={()=>{handelShowCourse()}}>Show course<MdOutlineKeyboardDoubleArrowDown /></div>
             <div className={ShowCourse?`flex flex-col `:`hidden`}>
                {semster.Courses.map((e)=>{
                    return <CourseInfo course={e}/>
                })}
             </div>
            </div>

            <button className="bg-p4 text-white px-10 py-2 w-52 h-10 rounded-2xl " onClick={()=>{DownloadFile(semster.file)}} >Download File</button>

          </div>
        </div>
   )
}

export default InfoSemster;