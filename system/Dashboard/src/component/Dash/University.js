    import { useEffect, useState } from "react";

    import { FaWindowClose } from "react-icons/fa";

    import API from "../../utility/Api";
    import Sucsses from "../../utility/Notification/Sucsess";



    function University(){

        let [ShowA,setShowA]=useState(false);

        let [AllUnis,setAllUnis]=useState([]);
        let [CurNameUni,setCurNameUni]=useState(``)

        async function getAllUniversity(){
            try{
                const res=await API.get(`/dashboard/getUniversitys`);
                
                setAllUnis(res.data)
            }
            catch(e){console.log(e)}
        }

        useEffect( ()=>{
            getAllUniversity();
          
        },[])

        function ShowAddnewUni(val){
        if(val==true){setShowA(true)}
        else if(val==false){setShowA(false)}
        }

        async function AddNewUniversity(){
            try{
                if(CurNameUni.length>4){console.log(`seeeeet`)
                    const res =await API.post(`/dashboard/adduniversity`,{username:CurNameUni});
                    if(res.status==200||201){
                        const respones=await API.get(`/dashboard/getUniversitys`);
                        setAllUnis(respones.data);
                        setShowA(false);
                        setCurNameUni(``)
                        Sucsses(`add new university`)

                    }
                }
            }
            catch(e){console.log(e)}

            
        }

        return (
        <div className="h-screen flex flex-col py-10 px-10">
            <div className="h-24 pl-8">
                <p className="text-white text-4xl font-semibold ">University</p>
            </div>
            <div className="flex-1 flex flex-col pl-8 relative">

                <div className={ShowA?`absolute h-full w-full bg-p4 flex flex-col`:`hidden  `}>
                  <div className="h-20 flex justify-end px-28">
                      <p onClick={()=>{ShowAddnewUni(false)}} className="text-white text-3xl"><FaWindowClose /></p>
                  </div>
                  <div className="mt-2 pl-12   ">
                      <input value={CurNameUni} onChange={(e)=>{setCurNameUni(e.target.value)}} placeholder="Enter to new university" className="h-16 rounded-3xl pl-3"></input>
                  </div>
                  <div className="mt-8 pl-16">
                      <button onClick={()=>{AddNewUniversity()}} className="w-28 h-12 text-white text-2xl rounded-3xl bg-p3">Add</button>
                  </div>
                </div>

                <div className="flex-1 flex flex-col space-y-2">
                    {AllUnis.map((e)=>{
                        return(
                            <div className="flex space-x-4 text-white text-3xl  ">
                                <div>{e.username}</div>
                                <div>Create at:    {e.startReg}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="h-20">
                    <button onClick={()=>{ShowAddnewUni(true)}} className="h-full w-72 rounded-2xl bg-p3 text-white text-2xl">Add New University</button>
                </div>

            </div>

        </div>
        )
    }

    export default University;