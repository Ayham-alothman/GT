import { useSelector,useDispatch } from "react-redux";
import { setFile } from "../../state/slices/SemsterSlice";
import axios from 'axios';

import ApiServerData from '../../utility/InitApierverData'
import HandelDataCourseSemster from "../../utility/HandelSendDataSemster/CourseSemster";


import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Sucses from '../../utility/Notfication/Sucsess';

function FinalRegistration(){

    const { forUniversity } = jwtDecode(Cookies.get(`token`));

    const Dispatch=useDispatch();
    const Navigate=useNavigate();

    let halls=useSelector((s)=>s.semster.halls);
    let times=useSelector((s)=>s.semster.times);
    let timeHalls=useSelector((s)=>s.semster.timeHalls);
    let subjectConflicts=useSelector((s)=>s.semster.subjectConflicts);
    let subjects=useSelector((s)=>s.semster.subjects);
    let teachers=useSelector((s)=>s.semster.teachers);
    let NameTeachers=useSelector((s)=>s.semster.nameTeachers);
    let department=useSelector((s)=>s.semster.department);
    


    let Allcourse=useSelector((s)=>s.semster.Allcourse);
    let Alltachers=useSelector((s)=>s.semster.Alltachers);

    let Allclass=useSelector((s)=>s.semster.Allclass);

    


    async function SendData(){
        try{
            const FileAlgorithm = await axios.post('http://127.0.0.1:5000/download', {
            halls,
            times,
            timeHalls,
            subjectConflicts,
            subjects,
            teachers,
            NameTeachers
        }, {
            responseType: 'blob', // Important for binary data
        });
           

              const ReqSemster=await ApiServerData.post(`/semster/newsemster`,{idUni:forUniversity});
              const idSemster=ReqSemster.data;


            const SDepart=department;
            const STime=times;
            const SCourse=HandelDataCourseSemster(Alltachers,Allcourse,subjects,Allclass,NameTeachers,idSemster);
             
            
            const ReqSaveNewSmsterData = await ApiServerData.post(`/semster/setdatanewsemster`,
             {DataDepart:SDepart,DataTime:STime,DataCourse:SCourse,idSemster:idSemster});
             
          
            const formData = new FormData();
            
            formData.append('file', FileAlgorithm.data, 'spreadsheet.xlsx');
            formData.append('idSemster', idSemster);
            
           
            const ReqSaveNewSmsterTable = await ApiServerData.post(`/semster/settable`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Ensure the correct content type
                },
            });

            Dispatch(setFile(FileAlgorithm.data));
            Sucses(`downloaded file`);
            Navigate('/showtable');
            

            

             



        }
        catch(e){console.log(e)}

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