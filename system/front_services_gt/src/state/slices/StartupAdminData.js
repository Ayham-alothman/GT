import { createSlice } from '@reduxjs/toolkit'

const initData={
    Department:[],
    Classroom:[]
}

const StartupSlice=createSlice({
    name:'startdata',
    initialState:initData,
    reducers:{
        AddDepartment:(state,action)=>{
            state.Department.push(action.payload);
        },
        AddClassroom:(state,action)=>{
            state.Classroom.push(action.payload);
        },
        DeleteDepartment:(state,action)=>{
            state.Department.splice(action.payload,1);
        },
        DeleteClassroom:(state,action)=>{
            state.Classroom.splice(action.payload,1);
        }
    }
})


export const {AddClassroom,AddDepartment,DeleteClassroom,DeleteDepartment} =StartupSlice.actions

export default StartupSlice.reducer;