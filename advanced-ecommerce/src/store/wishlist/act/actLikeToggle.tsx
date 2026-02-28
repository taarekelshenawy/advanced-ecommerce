import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";




const actLikeToggle= createAsyncThunk("wishlist/actLikeToggle",
    async(ItemId:number,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
      
        try{
            const checkWishlist= await axios.get(`/wishlist?userId=1&productId=${ItemId}`);
          if(checkWishlist.data.length > 0){ // لو لقي عنصر
                const itemIdToDelete = checkWishlist.data[0].id; // id الحقيقي
                await axios.delete(`/wishlist/${itemIdToDelete}`);  
                return {type:"remove",id:ItemId}  
           }else{
                 await axios.post('/wishlist',{userId:1,productId:ItemId});
                    return {type:"add",id:ItemId}  
              
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

export default  actLikeToggle ;