import { Link } from 'react-router-dom';
import log from '../assets/images/logo 1.png';
import Img from '../assets/images/imageHome.png'
function Home(){
    return (
    <>
     <div className="flex flex-col h-screen px-10">
        <div className="h-20  flex">
            <div className=" basis-1/6 h-full ">
                <img src={log} className=' w-full h-full object-contain mt-2'></img>
            </div>
            <div className=" basis-5/6 h-full flex justify-center">
                <div className='flex items-center justify-center space-x-20 font-light'>
                    <div className=' hover:font-bold'><Link>Home</Link></div>
                    <div className=' hover:font-bold'><Link>Services</Link></div>
                    <div className=' hover:font-bold'><Link>Store</Link></div>
                    <div className=' hover:font-bold'><Link>Support</Link></div>
                    <div className=' hover:font-bold'><Link>About</Link></div>
                </div>
            </div>
        </div>
        <div className="flex-1  flex">
            <div className=' basis-2/3 h-full flex flex-col justify-center px-24 '>
                <h1 className=' text-5xl mb-3'>Generate Your New Table</h1>
                <p className=' text-xl font-light'>make your schedel and work more orgaanzed and intergrated
                    ,so our life will be better and your productivity will be higher </p>
            </div>
            <div className=' basis-1/3 h-full flex justify-center items-center'>
                <img src={Img} className=' object-contain mr-10'></img>
            </div>
        </div>
     </div>
    </>
    )
}

export default Home;