import { useEffect, useState } from "react";

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import APIServerData from "../../utility/InitApierverData";

import Sucsess from "../../utility/Notfication/Sucsess";
import Erorr from "../../utility/Notfication/Erorr";




function AddTeacher(){
    
    const { forUniversity,permision,depart } = jwtDecode(Cookies.get(`token`));

    let [Department,setDepartment]=useState([]);
    let [SelectDepart,setSelectDepart]=useState('');

    let [NameTeacher,setNameTeacher]=useState('')
    

    useEffect(()=>{
        const getDpart=async ()=>{
            try{
                if(permision==1){
                    const ReqDepart=await APIServerData.post('/depart/getdeparts',{idUni:forUniversity});
                    setDepartment(ReqDepart.data);
                    
                }
                else{
                    setDepartment(depart);
                    
                }

            }
            catch(e){console.log(e)}

        }
        getDpart();
    },[])
    useEffect(() => {
        if (Department.length > 0) {
            setSelectDepart(Department[0]._id); // Ensure you use the correct property for the value
        }
    }, [Department]);



    async function AddNewTeacher(){
        console.log(NameTeacher)
        try{
           if(NameTeacher&&forUniversity,SelectDepart){
            const ReqTea=await APIServerData.post('/teacher/addteacher',{nameTeacher:NameTeacher,idDepart:SelectDepart,idUni:forUniversity});
            setNameTeacher('');
            Sucsess(`Add new teacher`);
           }
        }
        catch(e){Erorr(e)}


    }



    return(
       <div className="h-full px-96 flex flex-col space-y-4 mt-10">
        <input value={NameTeacher} onChange={(e)=>{setNameTeacher(e.target.value)}} className="border-2 border-p4 rounded-2xl w-60 h-10" placeholder="Enter name of teacher"></input>
        <select className="w-44 text-p4 font-bold pl-2" value={SelectDepart} onChange={(e)=>{setSelectDepart(e.target.value)}}>

            {Department.map((e)=>{
                return(
                    <option className="text-p4 font-bold" value={e._id}>{e.username}</option>
                )
            })}


        </select>

        <button  onClick={()=>{AddNewTeacher()}} className="h-12 w-44 bg-p4 text-white rounded-2xl ">Add new Teachers</button>

       </div>
    )
}

export default AddTeacher;