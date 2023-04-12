
import { createSlice } from "@reduxjs/toolkit";

const changeState = createSlice({
   name:'counter',
   initialState: 0,
   reducers: {
   increment: state=> state + 1,
   decrement: state=> state - 1,
   current: state=> state = 0
   }
})

export default changeState;   