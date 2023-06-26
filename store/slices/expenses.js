import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
    id:"5",
    title:"salaf",
}]
export const expensesSlices = createSlice({
    name:"expenses",
    initialState,
    reducers:{
        test :()=>{
            return 1
        }
    }
 })

 export const {test} = expensesSlices.actions
 export default expensesSlices.reducer