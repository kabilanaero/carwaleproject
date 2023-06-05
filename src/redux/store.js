import { configureStore } from "@reduxjs/toolkit";
import allData from "../redux/slice";

export const stores=configureStore({
    reducer:{
        allDetail:allData
    }
})