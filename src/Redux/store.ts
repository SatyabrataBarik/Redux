import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userDataSlice from "./userDataSlice";
export const store=configureStore({
    reducer:{userData:userDataSlice}
})
export  type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;