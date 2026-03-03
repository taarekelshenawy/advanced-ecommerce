import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";
import type { TProduct } from "@types";


type TResponse=TProduct[]

const actGetproductsbyPrefix = createAsyncThunk("getproduct/products",
    async(prefix:string,thunkAPI)=>{
        
        const {rejectWithValue,signal}=thunkAPI;
        try{
            const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`,{signal});
            return response.data;

        }catch(error){
            if(isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            }else{
                return rejectWithValue("An expected error")
            }

        }

    }
)

export default actGetproductsbyPrefix ;