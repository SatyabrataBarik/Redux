import {createSlice} from "@reduxjs/toolkit"
export interface LoginState{
    user:{[id:string]:string}
}
const initialState:LoginState={
   user:{}
}
const loginSlice=createSlice({
    name:'isLogin',
    initialState,
    reducers:{

    }
});
export default loginSlice.reducer;