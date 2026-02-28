import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";
import axios from "axios";
import { isAxiosError } from "axios";
import type { TProduct } from "src/types/product";


type TResponse=TProduct[]

const actAddtoCart = createAsyncThunk("addtoCart/cart",
    async(_,thunkAPI)=>{
        const {rejectWithValue,getState}=thunkAPI;
        const {cart} =getState() as RootState;
        const ObjectId = Object.keys(cart.items).map((el)=>`id=${el}`);
        const concatenatedObjectId=ObjectId.join('&');

        try{
            const response = await axios.get<TResponse>(`/products?${concatenatedObjectId}`);
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

export default actAddtoCart;