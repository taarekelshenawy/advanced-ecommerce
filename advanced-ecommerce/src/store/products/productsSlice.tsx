import { createSlice } from "@reduxjs/toolkit";
import actGetproductsbyPrefix from "./act/actGetproductsbyPrefix";
import type { TProduct } from "src/types/product";
import type{ TLoading } from "src/types/shared";

type TproductState={
    records:TProduct[],
     loading:TLoading,
     error:string | null,
}
const initialState:TproductState={
    records:[],
    loading:'idle',
    error:null,
}
const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        ProductCleanUp:(state)=>{
            state.records=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetproductsbyPrefix.pending,(state)=>{
            state.loading='pending';
            state.error=null
        })
         builder.addCase(actGetproductsbyPrefix.fulfilled,(state,action)=>{
            state.loading = 'succeeded';
            state.records=action.payload;
        })
         builder.addCase(actGetproductsbyPrefix.rejected,(state,action)=>{
          state.loading = 'failed';
            state.error=action.payload as string;
        })

    }
})
export const {ProductCleanUp}=productsSlice.actions;

export default productsSlice.reducer;