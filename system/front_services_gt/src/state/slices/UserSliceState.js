import { createSlice } from "@reduxjs/toolkit";

const initSate={user:'nologin'}
const userSlice=createSlice({
    name:'user',
    initialState:initSate,
    reducers:{
        setUser:(state,action)=>{console.log('2')
            state.user=action.payload;
        }
    }
})

export const {setUser}=userSlice.actions;
export default userSlice.reducer;