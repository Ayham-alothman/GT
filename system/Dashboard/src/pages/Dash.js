import { LuUniversity } from "react-icons/lu";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { AiFillFileText } from "react-icons/ai";

import University from '../component/Dash/University';
import Semsters from '../component/Dash/Semster'
import DeleteS from '../component/Dash/Delete';
import Admins from '../component/Dash/Admins'




import logo from '../assets/images/logo2.png';

import { useState } from "react";

function Dash() {

    let [ShowU,setShowU]=useState(false);
    let [ShowA,setShowA]=useState(false);
    let [ShowD,setShowD]=useState(false);
    let [ShowS,setShowS]=useState(false);

    function ChangeView(num){
        if(num==1){setShowU(true);setShowA(false);setShowD(false);setShowS(false);}
        else if(num==2){setShowU(false);setShowA(true);setShowD(false);setShowS(false);}
        else if(num==3){setShowU(false);setShowA(false);setShowD(true);setShowS(false);}
        else if(num==4){setShowU(false);setShowA(false);setShowD(false);setShowS(true);}
    }
    return (
        <div className="flex h-screen bg-p4">
            <div className="w-72 flex flex-col pt-5">
                <div className="h-24 flex items-center px-28">
                    <div className="h-20 w-10">
                        <img src={logo} alt="Logoaa" className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-col text-white text-2xl">
                        <div>Software</div>
                        <div>Product</div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col space-y-1 text-white font-semibold">
                    <div className="w-full h-16 flex justify-between items-center px-4" onClick={()=>{ChangeView(1)}}>
                        <div className="text-2xl">University</div>
                        <div className="text-4xl"><LuUniversity /></div>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center px-2" onClick={()=>{ChangeView(2)}}>
                        <div className="text-2xl">Admins</div>
                        <div className="text-4xl"><GrUserAdmin /></div>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center px-2" onClick={()=>{ChangeView(3)}}>
                        <div className="text-2xl">Delete Stuff</div>
                        <div className="text-4xl"><FaDeleteLeft /></div>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center px-2" onClick={()=>{ChangeView(4)}}>
                        <div className="text-2xl">Semesters</div>
                        <div className="text-4xl"><AiFillFileText /></div>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-p4">
                {ShowU?<University/>:false}
                {ShowA?<Admins/>:false}
                {ShowD?<DeleteS/>:false}
                {ShowS?<Semsters/>:false}

            </div>
        </div>
    );
}

export default Dash;
