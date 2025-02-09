import { useState } from 'react';
import logo from '../assets/images/logo2.png';

import Api from '../utility/Api';

import Sucsess from '../utility/Notification/Sucsess';
import Erorr from '../utility/Notification/Erorr';

import { useNavigate } from 'react-router-dom';


function Login() {

    let Navigate=useNavigate();

    let [Id, setId] = useState('');
    let [Password, setPassword] = useState('');


    async function loginValidation() { 
      try{
        if(Id&&Password){console.log('sssssset')
            let res=await Api.post('/login/ceo',{id:Id,password:Password},{ withCredentials: true });
            if(res.status==200||201){
                Sucsess(`welcome to return`);
                Navigate('/');
            }
        }
      }
      catch(e){  
        if(e.status){
            
            Erorr(e.response.data)
        }
        else{
            
            Erorr(e.message)
        }
      }

    }

    return (
        <div className='h-screen bg-p4 py-12'>
            <div className='flex flex-col'>
                <div className='h-32 flex justify-center'>
                    <img src={logo} className='w-full h-full object-contain' alt="Logo" />
                </div>
                <div className='flex flex-col h-96 w-80 mx-auto space-y-4 pl-6 mt-6'>
                    <input 
                        placeholder='Enter your id' 
                        className=' w-64 h-12 rounded-3xl px-2 ' 
                        value={Id} 
                        onChange={(e) => setId(e.target.value)} 
                    />
                    <input 
                        placeholder='Enter your password' 
                        className='w-64 h-12 rounded-3xl px-2' 
                        type='password' 
                        value={Password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className='text-white ml-4 w-32 h-12 rounded-2xl bg-p3' onClick={()=>{loginValidation()}}>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
