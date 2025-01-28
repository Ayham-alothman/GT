//{ a: 1, b: 2, c: 3, e: 9 }
import { FaBuilding } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";



import { useState } from "react";






function ClassC(){

     let [Type,setType]=useState({ a: 1, b: 2, c: 3, e: 9 })


    return(
        <div className="h-screen flex flex-col">
            <div className=" h-14">
                <h1 className="ml-3 my-3 text-3xl text-p4 font-bold">Class</h1>
            </div>
            <div className=" h-64 ">
                <div className="h-full w-1/2 bg-slate-50 mx-auto flex flex-col">
                    <div className="h-12 bg-p4"><p className="ml-8 mt-2  text-lg text-white">types of class</p></div>
                    <div className="flex-1 bg-white flex flex-col justify-around">
                        {Object.keys(Type).map((e)=>{
                            return(
                            <div className=" ml-2 flex space-x-12   items-center h-8">
                              <p className="text-3xl text-p4"><FaBuilding /></p>
                              <p>{e}</p>
                              <input className="w-10 h-10 border-2 rounded-2xl flex justify-center pl-2 border-p4" value={Type[e]}></input>
                              <p className="text-p4 text-2xl"><IoMdSend /></p>

                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 flex-1"></div>


        </div>
    )
}

export default ClassC;