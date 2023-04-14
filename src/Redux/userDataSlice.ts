import {createSlice} from "@reduxjs/toolkit"
export interface LoginState{
    userData:any
}
const initialState:LoginState={
   userData:[]
}
const userDataSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
       addToData(state,action){
        state.userData
       }
    }
});
export  const {addToData:any}=userDataSlice.actions
export default userDataSlice.reducer;