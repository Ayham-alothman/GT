import { Link } from 'react-router-dom';
import Img from '../assets/images/imageHome.png';


import Navbar2 from '../component/frequentcomponent/Navbar2';

function Home(){
    return (
    <>
     <div className="flex flex-col h-screen px-10">
       <Navbar2/>
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