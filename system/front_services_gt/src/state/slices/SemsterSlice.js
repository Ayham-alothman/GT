import { createSlice } from "@reduxjs/toolkit";

const SmsterSlice=createSlice({
    name:"smsterslice",
    initialState:{
        department:[],
        halls:{},
        times:{},
        subjectConflicts:{},
        subjects:{},
        teachers:{}
    },
    reducers:{
        setDepartment:(state,action)=>{state.department=action.payload},
        setHalls:(state,action)=>{state.halls=action.payload},
        setTimes:(state,action)=>{state.times=action.payload},
        setSubjectConflicts:(state,action)=>{state.subjectConflicts=action.payload},
        setSujects:(state,action)=>{state.subjects=action.payload},
        setTeachers:(state,action)=>{state.teachers=action.payload}
    }
})  

export const {setDepartment,setHalls,setSubjectConflicts,setSujects,setTeachers,setTimes}=SmsterSlice.actions;
export default SmsterSlice.reducer;