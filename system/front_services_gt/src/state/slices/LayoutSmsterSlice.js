import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice=createSlice({
    name:"layoutsemster",
    initialState:{
        department:false,
        course:false,
        classs:false,
        edittmeclass:false,
        conflictcourse:false,
        teachers:true,
    },
    reducers:{
        setViewdepartment:(state,action)=>{state.department=action.payload},
        setViewcourse:(state,action)=>{state.course=action.payload},
        setViewclass:(state,action)=>{state.classs=action.payload},
        setViewedittmeclass:(state,action)=>{state.edittmeclass=action.payload},
        setViewconflictcourse:(state,action)=>{state.conflictcourse=action.payload},
        setViewteachers:(state,action)=>{state.teachers=action.payload},
    }
})

export const {setViewclass,setViewconflictcourse,setViewcourse,setViewdepartments,setViewdepartment,setViewedittmeclass,setViewteachers}=LayoutSlice.actions;
export default LayoutSlice.reducer;