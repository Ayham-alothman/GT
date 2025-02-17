import { useEffect, useState } from "react";
import Navbar from "../component/frequentcomponent/Navbar";
import APIServerData from "../utility/InitApierverData";
import Sucsess from '../utility/Notfication/Sucsess';
import Erorr from '../utility/Notfication/Erorr';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function AddCourse() {
    const { forUniversity, permision, depart } = jwtDecode(Cookies.get(`token`));

    const [Depatment, setDepatment] = useState([]);
    const [ClassC, setClassC] = useState([]);

    

    const [AcadmicYear, setAcadmicYear] = useState('');
    const [Semster, setSemster] = useState('');
    const [NameE, setNameE] = useState('');
    const [NameA, setNameA] = useState('');
    const [NameC, setNameC] = useState('');
    const [NumberHourse, setNumberHourse] = useState('');
    const [NumberHourseP, setNumberHourseP] = useState('');
    const [NumberHourseT, setNumberHourseT] = useState('');
    const [Prerequisite, setPrerequisite] = useState('');
    const [PrerequisiteCode, setPrerequisiteCode] = useState('');
    const [PrerequisiteHour, setPrerequisiteHour] = useState('');
    const [Description, setDescription] = useState('');

    useEffect(() => {
       APIServerData.post('/class/getallclass',{ idUni: forUniversity })
       .then((d)=>{
        console.log(d.data);setClassC(d.data);
        if(permision==1){
            APIServerData.post(`/depart/getdeparts`, { idUni: forUniversity })
            .then((d)=>{setDepatment(d.data);})
           }
           else{
            setDepatment(depart);
           }
    })
       
       
    }, []);

    const [SelectDepart, setSelectDepart] = useState('');
    const [Class, setClass] = useState('');

 
    const handleAddCourse = async () => {
       
       
        console.log(SelectDepart,Class,'ss')
        const ob = {
            university_id: forUniversity,
            department_id: SelectDepart,
            classroom: Class,
            nameA: NameA,
            nameE: NameE,
            code: NameC,
            year: AcadmicYear,
            semester: Semster,
            hours: NumberHourse,
            hoursT: NumberHourseT,
            hoursP: NumberHourseP,
            prerequisiteByCode: PrerequisiteCode,
            prerequisite: Prerequisite,
            hoursPrerequisite: PrerequisiteHour,
            description: Description
        };

        try {
            if (forUniversity && NameA && NameE && NameC && AcadmicYear && Semster && NumberHourse && NumberHourseT && NumberHourseP && PrerequisiteCode && Description) {
                await APIServerData.post('/course/addcourse',{dataCourse:ob});
                Sucsess(`Add done`);
            } else {
                Erorr(`There is missing data`);
            }
        } catch (error) {
            Erorr(error);
        }
    };

    return (
        <>
            <div className="h-screen flex flex-col">
                <Navbar />
                <div className="h-14 flex px-10 space-x-10">
                    <div>
                        <h1 className="text-2xl text-p4">Department and Class</h1>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-p4 text-2xl mr-2">Select Department</h1>
                        <select value={SelectDepart} onChange={(e) => setSelectDepart(e.target.value)}>
                        <option  >   </option>
                            {Depatment.map((e) => (
                                <option key={e._id} value={e._id}>{e.username}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-p4 text-2xl mr-2">Select Class</h1>
                        <select value={Class} onChange={(e) => setClass(e.target.value)}>
                        <option  >   </option>
                            {ClassC.map((e) => (
                                <option key={e._id} value={e._id}>{e.type}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="h-28 flex px-10 pt-3">
                    <div className="basis-1/5"><h1 className="text-2xl text-p4">Study Plan:</h1></div>
                    <div className="basis-4/5 flex pt-6">
                        <div className="flex flex-col">
                            <p className="text-sm font-light mb-1">Academic Year</p>
                            <input value={AcadmicYear} onChange={(e) => setAcadmicYear(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Academic year" />
                        </div>
                        <div className="flex flex-col ml-44">
                            <p className="text-sm font-light mb-1">Semester</p>
                            <input value={Semster} onChange={(e) => setSemster(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Semester" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-backgroundReg bg-cover my-5 flex flex-col px-8">
                    <div className="flex-1 flex">
                        <div className="basis-1/5 flex"><h1 className="text-2xl text-p4">Names:</h1></div>
                        <div className="basis-4/5 flex space-x-12">
                            <div className="flex flex-col">
                                <p className="text-sm font-light mb-1">Course Name English</p>
                                <input value={NameE} onChange={(e) => setNameE(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Course Name English" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-light mb-1">Course Name Arabic</p>
                                <input value={NameA} onChange={(e) => setNameA(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Course Name Arabic" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-light mb-1">Course Code</p>
                                <input value={NameC} onChange={(e) => setNameC(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Course Code" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex space-x-5 mt-4">
                        <div><h1 className="text-2xl text-p4">Number of Course Hours:</h1></div>
                        <div className="flex flex-col">
                            <p className="text-sm font-light mb-1">Total Hours</p>
                            <input value={NumberHourse} onChange={(e) => setNumberHourse(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Total Hours" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-light mb-1">Hours T</p>
                            <input value={NumberHourseP} onChange={(e) => setNumberHourseP(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Hours T" />
                        </div>
                        <div className="flex flex-col basis-4/5">
                            <p className="text-sm font-light mb-1">Hours P</p>
                            <input value={NumberHourseT} onChange={(e) => setNumberHourseT(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Hours P" />
                        </div>
                    </div>
                    <div className="flex-1 flex space-x-5 my-4">
                        <div><h1 className="text-2xl text-p4">Prerequisite:</h1></div>
                        <div className="flex flex-col">
                            <p className="text-sm font-light mb-1">Prerequisite By Code</p>
                            <input value={PrerequisiteCode} onChange={(e) => setPrerequisiteCode(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Prerequisite By Code" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-light mb-1">Prerequisite</p>
                            <input value={Prerequisite} onChange={(e) => setPrerequisite(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Prerequisite" />
                        </div>
                        <div className="flex flex-col basis-4/5">
                            <p className="text-sm font-light mb-1">Hours Prerequisite</p>
                            <input value={PrerequisiteHour} onChange={(e) => setPrerequisiteHour(e.target.value)} type="text" className="border w-48 h-8 pl-3 rounded-full border-px" placeholder="Hours Prerequisite" />
                        </div>
                    </div>
                    <div className="flex-1 flex">
                        <div className="basis-1/5"><h1 className="text-2xl text-p4">Description Course:</h1></div>
                        <div className="flex basis-4/5">
                            <input value={Description} onChange={(e) => setDescription(e.target.value)} type="text" className="border w-96 h-28 pl-3 rounded-lg border-px" placeholder="Description Course" />
                            <button onClick={handleAddCourse} className="h-12 w-60 rounded-2xl bg-p4 text-white flex justify-center items-center text-2xl mt-8 ml-4">Add Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCourse;
