import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice=createSlice({
    name:"layoutsemster",
    initialState:{
        department:true,
        course:false,
        classs:false,
        edittmeclass:false,
        conflictcourse:false,
        teachers:false,
        finalRe:false
    },
    reducers:{
        setViewdepartment:(state,action)=>{state.department=action.payload},
        setViewcourse:(state,action)=>{state.course=action.payload},
        setViewclass:(state,action)=>{state.classs=action.payload},
        setViewedittmeclass:(state,action)=>{state.edittmeclass=action.payload},
        setViewconflictcourse:(state,action)=>{state.conflictcourse=action.payload},
        setViewteachers:(state,action)=>{state.teachers=action.payload},
        setViewFinal:(state,action)=>{state.finalRe=action.payload},
    }
})

export const {setViewclass,setViewFinal,setViewconflictcourse,setViewcourse,setViewdepartments,setViewdepartment,setViewedittmeclass,setViewteachers}=LayoutSlice.actions;
export default LayoutSlice.reducer;