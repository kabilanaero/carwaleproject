import { createSlice } from "@reduxjs/toolkit";
import  {carDetails} from "../details/data";

const allData=createSlice({
    name:"carwale",
    initialState:{
        allCarDetails:carDetails, 
        carList: [],
        carSelect1: [],
        carSelect2: [],
        selectPrice: '',
        selectCompany: ''  
    },
    reducers:{
        allCarDetails: (state, action) => {
            state.carDetails = action.payload
        },
        carList: (state, action) => {
            state.carList = action.payload
        },
        carset1: (state, action) => {
            state.carset1 = action.payload
        },
        carset2: (state, action) => {
            state.carset2 = action.payload
        },
        selectCompany: (state, action) => {
            state.selectCompany = action.payload
        },
        selectPrice: (state, action ) => {
            state.selectPrice = action.payload
        },
        clearData : (state, action) =>{
           state.carset1 = action.payload
            state.carset2 = action.payload
        }
    }
})
export default allData.reducer; 
export const {allCarDetails,carList,carset1,carset2,selectCompany,selectPrice, clearData}=allData.actions;
