import React, { useEffect, useState } from 'react';
import { FaWindowClose } from "react-icons/fa";


import API from '../../utility/Api';
import Sucsses from '../../utility/Notification/Sucsess';

function Admins() {
    const [selectedUni, setSelectedUni] = useState(``);

    let [password,setpassword]=useState('');
    let [NameE,setNameE]=useState('');

    let [AllUnis,setAllUnis]=useState([]);
    let [Admins,setAdmins]=useState([]);

    let [ShowAdmins,setShowAdmins]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adminResponse = await API.get(`/dashboard/getadmins`);
                if (adminResponse.status === 200) {
                    setAdmins(adminResponse.data);
                } else {
                    console.error(`Error fetching admins: ${adminResponse.status}`);
                }
    
                const uniResponse = await API.get(`/dashboard/getUniversitys`);
                if (uniResponse.status === 200) {
                    setSelectedUni(uniResponse.data[0]._id);
                    setAllUnis(uniResponse.data);
                } else {
                    console.error(`Error fetching universities: ${uniResponse.status}`);
                }
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        };
    
        fetchData();
    }, []);
    

    async function AddNewAdmin(){
        try{
            if(NameE.length>4&&password.length>4){
              const res=await API.post('/dashboard/addadmin',
              {username:NameE,password:password,forUniversity:selectedUni,permision:1});
              if(res.status==200){
                setpassword(``);
                setNameE('');
                Sucsses(`Add Admin `)
              }

            }

            
        }
        catch(e){console.log(e)}
    } 

    return (
        <div className="h-screen px-12 pt-20 flex flex-col">
            <div className="h-12 text-4xl text-white font-semibold">Admins</div>
            <button onClick={()=>{setShowAdmins(true)}} className="text-white w-32 h-12 rounded-2xl bg-p3">Show All Admins </button>


            <div className="flex-1 pl-4 flex flex-col space-y-4 mt-6 relative">
               
                <div className={ShowAdmins?`absolute w-full h-full bg-p4 px-8 `:` hidden`}>
                    <div className='h-6 flex justify-end  px-8'><p onClick={()=>{setShowAdmins(false)}} className='text-white text-3xl'><FaWindowClose /></p></div>
                    <h1 className='text-white text-2xl font-bold mb-3'>All Admins</h1>
                    <div className='flex flex-col overflow-y-scroll'>
                        {Admins.map((e)=>{
                            return(
                                <div className='flex flex-col text-white text-xl font-semibold border-b-2 border-white '>
                                    <p>id: {e._id}</p>
                                    <p>name: {e.username}</p>
                                    <p>university: {e.forUniversity.username}</p>

                                </div>
                            )
                        })}

                    </div>

                </div>
                <input value={NameE} onChange={(e)=>{setNameE(e.target.value)}} className="h-12 rounded-3xl w-52 pl-4" placeholder="enter name english" />
                <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className="h-12 rounded-3xl w-52 pl-4" placeholder="enter your password" />

                <p className="text-xl text-white">Select University</p>
                <select 
                    className="w-52 text-lg font-light" 
                    value={selectedUni} 
                    onChange={(e) => setSelectedUni(e.target.value)}>
                    {AllUnis.map((e, index) => (
                        <option key={index} value={e._id}>{e.username}</option>
                    ))}
                </select>

                <button onClick={()=>{AddNewAdmin()}} className="text-white w-32 h-12 rounded-2xl bg-p3">Add</button>
            </div>
        </div>
    );
}

export default Admins;
