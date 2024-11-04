import logo from '../../assets/images/logo_navbar.png';
import { FaUser } from "react-icons/fa6";

function Navbar(){
    return(
    <>
    <div className='  flex flex-row justify-between items-center h-24 mx-4 border-b border-p4'>
        <div className='flex basis-1/4 justify-between ml-2  border-r border-p4 '>
            <img src={logo} className=' h-20 '></img>
            <h1 className=' mx-2 mt-6 text-p4 text-2xl'>Home</h1>
        </div>

        <div className='flex basis-3/4 justify-end items-center mr-2 h-10 '>
            <p className='mr-4 mt-1 font-light text-xl '>user name</p>
            <p className=' text-3xl text-p4'><FaUser /></p>
        </div>
    </div>
 
    
    
    </>
    )
}

export default Navbar