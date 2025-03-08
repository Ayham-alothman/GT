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

        Allcourse:[],
        Alltachers:[],
        Allclass:[],

        file:{}
    },
    reducers:{
        setDepartment:(state,action)=>{state.department=action.payload},
        setHalls:(state,action)=>{state.halls=action.payload},
        setTimes:(state,action)=>{state.times=action.payload},
        settimeHalls:(state,action)=>{state.timeHalls=action.payload},
        setSubjectConflicts:(state,action)=>{state.subjectConflicts=action.payload},
        setSujects:(state,action)=>{state.subjects=action.payload},
        setnameTeachers:(state,action)=>{state.nameTeachers=action.payload},
        setTeachers:(state,action)=>{state.teachers=action.payload},

        setAllcourse:(state,action)=>{state.Allcourse=action.payload},
        setAllteachersR:(state,action)=>{state.Alltachers=action.payload},
        setAllclass:(state,action)=>{state.Allclass=action.payload},

        setFile:(state,action)=>{state.file=action.payload},
    }
})  

export const {setFile,setAllclass,setAllcourse,setAllteachersR,setDepartment,setHalls,settimeHalls,setnameTeachers,setSubjectConflicts,setSujects,setTeachers,setTimes}=SmsterSlice.actions;
export default SmsterSlice.reducer;