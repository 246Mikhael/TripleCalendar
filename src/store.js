import { configureStore } from "@reduxjs/toolkit";
import changeState from "./reducers/changeState";


export const store = configureStore({
    reducer: changeState.reducer
})