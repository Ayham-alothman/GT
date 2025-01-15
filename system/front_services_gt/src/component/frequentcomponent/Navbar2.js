import { Link } from 'react-router-dom';
import log from '../../assets/images/logo 1.png'
import { useState } from 'react';

function Navbar2(){
    let [BoxServises,setBoxServises]=useState(0);
    let [BoxStore,setBoxStore]=useState(0);
    return(
        <div className="h-20  flex">
            <div className=" basis-1/6 h-full ">
                <img src={log} className=' w-full h-full object-contain mt-2'></img>
            </div>
            <div className=" basis-5/6 h-full flex justify-center">
                <div className='flex items-center justify-center space-x-20 font-light'>
                    <div className=' hover:font-bold'><Link>Home</Link></div>

                    <div className=' hover:font-bold '  onMouseEnter={()=>{setBoxServises(1)}} onMouseLeave={()=>{setBoxServises(0)}} >
                        <Link >Services</Link>
                        <div className={BoxServises?` absolute w-auto h-auto bg-gray-300 flex flex-col text-sm font-light pt-2 px-1 space-y-3  `:`hidden`} >
                            <Link className='hover:font-semibold'>Generate Table</Link>
                            <Link className='hover:font-semibold'>Add/remove Coordition</Link>
                            <Link className='hover:font-semibold'>Add/remove Teacher</Link>
                            <Link className='hover:font-semibold'>Add/remove Course</Link>
                            <Link className='hover:font-semibold '>Add/remove Department</Link>
                            
                        </div>
                    </div>

                    <div className=' hover:font-bold' onMouseEnter={()=>{setBoxStore(1)}} onMouseLeave={()=>{setBoxStore(0)}}>
                        <Link >Store</Link>
                        <div className={BoxStore?` absolute w-auto h-auto bg-gray-300 flex flex-col text-sm font-light pt-2 px-1 space-y-3  `:`hidden`} >
                            <Link className='hover:font-semibold'>Semsters</Link>
                            <Link className='hover:font-semibold'>Coordition</Link>
                            <Link className='hover:font-semibold'>Teacher</Link>
                            <Link className='hover:font-semibold'>Course</Link>
                        </div>
                    </div>

                    <div className=' hover:font-bold'><Link>Support</Link></div>

                    <div className=' hover:font-bold'><Link>About</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2;