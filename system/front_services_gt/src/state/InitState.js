import { configureStore } from '@reduxjs/toolkit';
import StartSlice from './slices/StartupAdminData';
import userSlice from'./slices/UserSliceState';
import SemsterSlice from './slices/SemsterSlice';
import LayoutSmsterSlice from './slices/LayoutSmsterSlice';
export const store = configureStore({
  reducer: {
    startupAdmin:StartSlice,
    infoUser:userSlice,
    semster:SemsterSlice,
    layoutsemster:LayoutSmsterSlice
  },
})