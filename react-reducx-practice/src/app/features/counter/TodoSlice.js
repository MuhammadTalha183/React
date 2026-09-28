
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : []
}
const TodoSlice = createSlice({
    name : "todo",
    initialState ,
    reducers : {
        addToDo : (state,action)=>{
            console.log("add todo chal gaya ")
           state.todo.push({id: Date.now(), name: action.payload})
        }
    }
    
})
export const {addToDo} = TodoSlice.actions
export default TodoSlice.reducer