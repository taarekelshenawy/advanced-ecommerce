import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";




const actGetwishlist= createAsyncThunk("wishlist/actGetwishlist",
    async(_,thunkAPI)=>{
        const {rejectWithValue,fulfillWithValue}=thunkAPI;
        try{
            const checkWishlist= await axios.get<{userId:number,productId:number}[]>(`/wishlist?userId=1`);
          if(checkWishlist.data.length){ // لو لقي عنصر
              const ItemsId=checkWishlist.data.map((el)=>`id=${el.productId}`);
              const concatinatedItemsId =ItemsId.join('&')
            const response = await axios.get(`/products?${concatinatedItemsId}`) ;
            return response.data;
           }
           if(!checkWishlist.data.length){
            return fulfillWithValue([])
           }
        }catch(error){
            if(isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            }else{
                return rejectWithValue("An expected error")
            }

        }

    }
)

export default  actGetwishlist ;