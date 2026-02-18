import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";
import type { TCategory } from "src/types/category";


type TResponse=TCategory[]

const actgetCategories = createAsyncThunk("getcategory/categories",
    async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try{
            const response = await axios.get<TResponse>("http://localhost:5005/categories");
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

export default actgetCategories;