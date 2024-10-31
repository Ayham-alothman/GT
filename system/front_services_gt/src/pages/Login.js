import logo from '../assets/images/logo 1.png';
import { FaRegUser } from "react-icons/fa6";

function Login(){

    return (
    <>
     <div className=' bg-backgroundLogin h-dvh w-dvw flex'>
        <div className=' h-2/3 w-1/2 bg-white mx-auto my-auto rounded-full flex'>
            <div className='  w-2/3 mx-auto h-4/5 mt-7 flex flex-col items-center space-y-5 pt-5'>
                <div className=' w-1/5 bg-black rounded-full'><img src={logo} className=' w-full'></img></div>
                <input type='text' placeholder='  enter fully id' className=' border-2 border-black h-10 w-64 rounded-2xl'></input>
                <input type='password' placeholder='  enter password' className=' border-2 border-black h-10 w-64 rounded-2xl'></input>
                <button className=' h-10 w-64 rounded-2xl bg-p4 text-white '>Login</button>
                <div className=' flex space-x-5'>
                <label>
                  <input
                    
                    type="radio"
                    value="option1"
                    className=' mr-1'
                  />
                  student
                </label>

                <label>
                  <input
                    type="radio"
                    value="option1"
                    className=' mr-1'
                  />
                  admin
                </label>

                <label>
                  <input
                    type="radio"
                    value="option1"
                    className=' mr-1'
                  />
                  coordition
                </label>
                </div>
            </div>
           
        </div>
     </div>
    
    
    
    </>
    )
}

export default Login;