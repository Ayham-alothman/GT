import { useState ,useEffect} from 'react';
import logo from '../assets/images/logo 1.png';
import Api from '../utility/initRequestApi'; 
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Erorr from '../utility/Notfication/Erorr';

import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import sucsess from '../utility/Notfication/Sucsess';
import {useDispatch} from 'react-redux';
import {setUser} from '../state/slices/UserSliceState';

function Login(){
  const navigate = useNavigate();
  const usedispatch=useDispatch();


  let [Id,setId]=useState('');
  let [Password,setPassword]=useState('');
  let [Actor,SetActor]=useState('');
  

  function handelActor(val){
    SetActor(val);
    
  }



  async function loginValdition(){ 
      if(Id.length<8||Password.length<8||Actor.length==0){}
      else{
        try{
          const Respones= await Api.post(`/login/${Actor}`,{id:Id,password:Password},{ withCredentials: true });
          const token=Cookies.get(`token`);
          const data=jwtDecode(token)
          if(Respones.status==200&&data){
            usedispatch(setUser(data));
            navigate(`/`);
            sucsess(`login sucsess`)
          }
        }
        catch(e){
          if(e.status&&e.response){Erorr(e.response.data)}
          else if(e.message){Erorr(e.message)}
          else{Erorr(e)}
        }
      }
  }

    return (
    <> 
     <div className=' bg-backgroundLogin h-dvh w-dvw flex'>
        <div className=' h-2/3 w-1/2 bg-white mx-auto my-auto rounded-full flex'>
            <div className='  w-2/3 mx-auto h-4/5 mt-7 flex flex-col items-center space-y-5 pt-5'>
                <div className=' w-1/5 bg-black rounded-full'><img src={logo} className=' w-full'></img></div>
                <input type='text' placeholder='  enter fully id' className=' border-2 border-black h-10 w-64 rounded-2xl'     value={Id} onChange={(e)=>{e.preventDefault();setId(e.target.value)}}></input>
                <input type='password' placeholder='  enter password' className=' border-2 border-black h-10 w-64 rounded-2xl' value={Password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value)}}></input>
                <button className=' h-10 w-64 rounded-2xl bg-p4 text-white ' onClick={(e)=>{e.preventDefault();loginValdition();}}>Login</button>
                <div className=' flex space-x-5'>
                
                 <label>
                  <input type="radio" name="options" value={`admin`} onChange={(e)=>{handelActor(e.target.value)}}   ></input>
                       admin
                 </label>

                 <label>
                  <input type="radio" name="options" value={`coordition`} onChange={(e)=>{handelActor(e.target.value)}} ></input>
                       coordition
                 </label>

                 <label>
                  <input type="radio" name="options" value={`student`} onChange={(e)=>{handelActor(e.target.value)}}  ></input>
                       student
                 </label>
        
                </div>
            </div>
           
        </div>
     </div>
    
    
    
    </>
    )
}

export default Login;