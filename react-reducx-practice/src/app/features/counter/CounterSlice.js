import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState , 
    reducers : {
        increment :  (state)=> {
            console.log("increment chaal ")
            state.value += 1 
        },
        decrement : (state)=>{
            state.value -=1
        },
        reset : (state)=>{
            state.value = 0
        },
        addByAmmount : (state, action)=>{
            state.value += action.payload
        }
    }
     
})

 export const {increment , decrement , reset , addByAmmount} = counterSlice.actions

 export default counterSlice.reducer

