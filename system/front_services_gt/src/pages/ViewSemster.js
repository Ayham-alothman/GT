import { useState, useEffect } from 'react';
import ApiServerData from '../utility/InitApierverData';
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';

import InfoSemster from '../component/frequentcomponent/InfoSemster';

import Navbar2 from '../component/frequentcomponent/Navbar'

function ViewSemster() {
    const { forUniversity } = jwtDecode(Cookies.get(`token`));
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        const getSemesters = async () => {
            try {
                const semesterData = await ApiServerData.post(`/semster/getsemsters`, { idUni: forUniversity });
                setSemesters(semesterData.data);
                console.log(semesterData.data);
            } catch (e) {
                console.log(e);
            }
        };
        getSemesters();
    }, []);

   

    return (
      <div className='h-screen flex flex-col px-8'>
        <Navbar2/>
        <h1 className='text-p4 text-4xl mb-2'>Semsters History</h1>
        <div className='flex flex-col space-y-3 overflow-y-scroll'>
          {semesters.map((e)=>{
            return(<InfoSemster semster={e}/>)
          })}
        </div>

      </div>
    );
}

export default ViewSemster;
