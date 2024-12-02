import { configureStore } from '@reduxjs/toolkit';
import StartSlice from './slices/StartupAdminData';
import userSlice from'./slices/UserSliceState'
export const store = configureStore({
  reducer: {
    startupAdmin:StartSlice,
    infoUser:userSlice,
  },
})