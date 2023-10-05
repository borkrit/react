import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../services/country/countrySlice";



export default configureStore({
    reducer:{
        country: countrySlice
    }
})