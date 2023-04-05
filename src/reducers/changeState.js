
import { createSlice } from "@reduxjs/toolkit";

/*
const initialState={visible: 0}

const changeState = (state = initialState, action)=>{
   switch(action.type){
    case 'INCREASE':
        return Object.assign({}, state, {visible: state.visible + 1});
     case 'DECREASE':
        return Object.assign({}, state, {visible: state.visible - 1});       
    default: return state;   
   }
};
 */


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