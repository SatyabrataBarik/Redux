import {createSlice} from "@reduxjs/toolkit"
export interface LoginState{
    user:{[productId:string]:any}
}
const initialState:LoginState={
    user:{}
}
const loginSlice=createSlice({
    name:'user',
    initialState,
    reducers:{}
});
export default loginSlice.reducer;