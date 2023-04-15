import {createSlice} from "@reduxjs/toolkit"

export interface LoginState{
    userData:Array<any>
}
const initialState:LoginState={
   userData:[],
}
const userDataSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
       addToData(state,action){
        // const notExist=state.userData.find((v:any)=>v.email!=action.payload.email)
        // if(notExist){
          state.userData.push(action.payload)
        // }
       }
    }
});
export  const {addToData}=userDataSlice.actions
export default userDataSlice.reducer;