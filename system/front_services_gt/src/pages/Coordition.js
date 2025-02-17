import { useEffect, useState } from "react";

import Navbar from "../component/frequentcomponent/Navbar";

import APIServerData from "../utility/InitApierverData";


import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode';

import Sucsess from "../utility/Notfication/Sucsess";
import Erorr from "../utility/Notfication/Erorr";

import InstanceAxios from "../utility/initRequestApi";

import { useNavigate } from "react-router-dom";



function Coordition(){
    const {permision,depart,forUniversity}=jwtDecode(Cookies.get(`token`));
    
    const Navigate=useNavigate();


    const[Alldepart,setAlldepart]=useState([])
    let [SelectDepart,setSelectDepart]=useState([]);
    let [ReadOnlyList,setReadOnlyList]=useState([]);

    let [ShowWindo,setShowWindo]=useState(0);

    let [NameCord,setNameCord]=useState('');
    let [Password,setPassword]=useState('');

    useEffect(()=>{
        const GetDepart=async ()=>{
            try{
              const ReqDepart=await APIServerData.post(`/depart/getdeparts`,{idUni:forUniversity});
              setAlldepart(ReqDepart.data);
              console.log(ReqDepart.data)
  
            }
            catch(e){Erorr(e)}
          }
          GetDepart();
    },[])


    function AddandRemoveAdminsReadOnly(id){
        let found=false;
        ReadOnlyList.forEach((e)=>{
            if(e==id){found=true}
        })

        if(found){
            let newDepart=ReadOnlyList.filter((e)=>{
                if(e!=id){return e}
            })
            setReadOnlyList(newDepart);
        }
        else{setReadOnlyList([...ReadOnlyList,id])}

    }

    function AddandRemoveAdmins(id,nameD){
        let found=false;
        SelectDepart.forEach((e)=>{
            if(e._id==id){found=true}
        })

        if(found){
            let newDepart=SelectDepart.filter((e)=>{
                if(e._id!=id){return e}
            })
            setSelectDepart(newDepart);
        }
        else{setSelectDepart([...SelectDepart,{_id:id,username:nameD,write:1}])}

    }

    function Selee(id){
        SelectDepart.forEach((e)=>{
            if(e._id==id){return true}
        })
       
    }

    function SeleeRead(id){
        ReadOnlyList.forEach((e)=>{
            if(e==id){return true}
        })
       
    }

   async function AddNewAdmin(){
        
       try{
        let Depart=SelectDepart;
        let ReadOnly=ReadOnlyList;
        if(NameCord.length>2&&Password.length>6&&Depart.length>0){
            ReadOnly.forEach((eleR)=>{
              Depart.forEach((eleD)=>{
                if(eleR==eleD._id){console.log('set');eleD.write=0}
              })
            })
            console.log(Depart)
        }
        console.log(NameCord);
        console.log(Password);
        console.log(forUniversity);
        console.log(2);
        console.log(true);
        console.log(Depart);
        const ReqAdmin=await InstanceAxios.post(`/signup/subadmin`,
        {username:NameCord,password:Password,forUniversity:forUniversity,permision:2,preinfo:true,depart:Depart});
        Navigate('/');
        Sucsess(`Add new admin`);
       }
       catch(e){Erorr(e)}


    }

    return(
       <div className="h-screen flex flex-col px-4 pt-4">
        <Navbar/>
        <div className="text-p4 text-3xl font-bold  ">Coordition</div>
        <div className="flex justify-center space-x-3">
            <button className=" px-5 py-3 bg-p4 text-white flex justify-center items-center rounded-2xl" onClick={()=>{setShowWindo(1)}}>Add cord</button>
            <button className=" px-5 py-3 bg-p4 text-white flex justify-center items-center rounded-2xl" onClick={()=>{setShowWindo(2)}}>Remove cord</button>

        </div>
        
        <div className="flex-1 mt-3 relative">
            <div className={ShowWindo==1?` absolute px-28 h-full flex w-full `:` hidden`}>
             <div className="flex flex-col w-96 h-full pt-10">
              <input value={NameCord} onChange={(e)=>{setNameCord(e.target.value)}} className="pl-2 w-80 border-2 border-p4 py-2 rounded-2xl mb-4" placeholder="enter name cord "></input>
              <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} className="pl-2 w-80 border-2 border-p4 py-2 rounded-2xl" placeholder="enter password "></input>
              <button onClick={()=>{AddNewAdmin()}} className="mt-5 bg-p4 w-80 h-14 rounded-2xl text-white "> Add new Admin</button>
             </div>
             <div className="bg-p4 flex-1 h-full w-full">
                <h1 className="mt-2 ml-5 text-white text-xl">select department</h1>
                <div className="bg-white w-96 h-80 ml-32 mt-6 rounded-xl">
                   {Alldepart.map((e)=>{
                    return(
                        <div className="flex items-center h-12 pl-1 ">
                          <input onChange={()=>{AddandRemoveAdmins(e._id,e.username)}}  checked={  Selee(e._id)} className="h-5 w-5 mr-1" type="checkbox"></input>
                          <p className="mr-4 text-p4 text-xl font-semibold">{e.username }</p>
                          <p className="text-p4 text-xl font-semibold">Read only</p>
                          <input onChange={()=>{AddandRemoveAdminsReadOnly(e._id)}} checked={SeleeRead(e._id)} type="checkbox"></input>
                        </div>
                    )
                   })}
                </div>

             </div>
            </div>
            <div className={ShowWindo==2?` absolute`:` hidden`}>22</div>

        </div>
        
        

       </div>
    )
}

export default Coordition;