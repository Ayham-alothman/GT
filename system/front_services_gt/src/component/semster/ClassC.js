import { FaBuilding } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DictionaryDays from "../../utility/DictionaryDays";
import CombainTimeClass from "../../utility/CombainClassTime";

import { setHalls,settimeHalls } from "../../state/slices/SemsterSlice";
import { setViewconflictcourse } from "../../state/slices/LayoutSmsterSlice";
import { useDispatch } from "react-redux";

function ClassC() {
    let dispatch=useDispatch();
    const Time = useSelector((s) => s.semster.times);
    const [Type, setCapacities] = useState(useSelector((s) => s.semster.halls));
    const [timeHalls, setTimeHalls] = useState(CombainTimeClass(Type, Time));

    useEffect(() => {
        setTimeHalls(CombainTimeClass(Type, Time));
    }, [Type, Time]); 
    function ChangeCapacity(key, value) {
        setCapacities((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function ChangeTimeHalls(C, D, T, V) {
        setTimeHalls((prev) => ({
            ...prev,
            [C]: {
                ...prev[C],
                [D]: {
                    ...prev[C][D],
                    [T]: V,
                },
            },
        }));
    }

    function SetAllClass(){
        dispatch(setHalls(Type));
        dispatch(settimeHalls(timeHalls));
        dispatch(setViewconflictcourse(true));

    }

    return (
        <div className="h-auto flex flex-col">
            <div className="h-14">
                <h1 className="ml-3 my-3 text-3xl text-p4 font-bold">Class</h1>
            </div>
            <div className="h-64">
                <div className="h-full w-1/2 bg-slate-50 mx-auto flex flex-col">
                    <div className="h-12 bg-p4">
                        <p className="ml-8 mt-2 text-lg text-white">Types of Class</p>
                    </div>
                    <div className="flex-1 bg-white flex flex-col justify-around">
                        {Object.keys(Type).map((key) => {
                            return (
                                <div className="ml-2 flex space-x-12 items-center h-8" key={key}>
                                    <p className="text-3xl text-p4"><FaBuilding /></p>
                                    <p>{key}</p>
                                    <input
                                        onChange={(e) => ChangeCapacity(key, e.target.value)}
                                        className="w-10 h-10 border-2 rounded-2xl flex justify-center pl-2 border-p4"
                                        value={Type[key]}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-5 h-auto flex flex-col space-y-6 px-28 ">
                {Object.keys(timeHalls).map((e) => {
                    return (
                        <div className="h-96 flex flex-col" key={e}>
                            <div className="h-12 rounded-t-xl flex items-center pl-8 bg-p4">
                                <p className="text-xl text-white font-light">Edit time class</p>
                            </div>
                            <div className="flex-1 rounded-b-xl bg-p3 px-10 pt-6 flex flex-col">
                                <div className="h-8 flex pl-16 space-x-5">
                                    <p className="text-p2 font-light">Type class {e}</p>
                                    <p className="text-p2 font-light">All Number classes: {Type[e]}</p>
                                </div>
                                <div className="flex-1 flex flex-col space-y-3">
                                    {Object.keys(timeHalls[e]).map((D) => {
                                        const Day = DictionaryDays(D);
                                        return (
                                            <div className="flex space-x-3" key={D}>
                                                <div className="font-light w-20 text-lg mr-4 text-p2">{Day}</div>
                                                <div className="flex space-x-10">
                                                    {Object.keys(timeHalls[e][D]).map((p) => {
                                                        return (
                                                            <div className="h-5 w-6 flex" key={p}>
                                                                <div className="rounded-l-2xl px-1">{p}</div>
                                                                <input 
                                                                    value={timeHalls[e][D][p]} 
                                                                    onChange={(ele) => {ChangeTimeHalls(e, D, p, ele.target.value)}}
                                                                    className="w-8 text-p4 pl-2 rounded-r-2xl h-full flex-1"
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="h-auto px-8 flex justify-end my-2">
                <button onClick={()=>{SetAllClass()}} className="h-12 w-32 flex justify-center items-center text-xl font-bold text-white bg-p4 rounded-r-2xl">Set Class</button>
            </div>
        </div>
    );
}

export default ClassC;
