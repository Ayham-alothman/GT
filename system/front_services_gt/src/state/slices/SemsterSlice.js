import { createSlice } from "@reduxjs/toolkit";

const SmsterSlice=createSlice({
    name:"smsterslice",
    initialState:{
        department:[],
        halls:{},
        times:{},
        timeHalls:{},
        subjectConflicts:{},
        subjects:{},
        nameTeachers:{},
        teachers:{},
    },
    reducers:{
        setDepartment:(state,action)=>{state.department=action.payload},
        setHalls:(state,action)=>{state.halls=action.payload},
        setTimes:(state,action)=>{state.times=action.payload},
        settimeHalls:(state,action)=>{state.timeHalls=action.payload},
        setSubjectConflicts:(state,action)=>{state.subjectConflicts=action.payload},
        setSujects:(state,action)=>{state.subjects=action.payload},
        setnameTeachers:(state,action)=>{state.nameTeachers=action.payload},
        setTeachers:(state,action)=>{state.teachers=action.payload}
    }
})  

export const {setDepartment,setHalls,settimeHalls,setnameTeachers,setSubjectConflicts,setSujects,setTeachers,setTimes}=SmsterSlice.actions;
export default SmsterSlice.reducer;