import { createSlice } from "@reduxjs/toolkit";
import actgetCategories from "./act/actgetCategories";
import type{ TCategory } from "@types";
import type{ TLoading } from "@types";

type TcategoryState={
    records:TCategory[],
     loading:TLoading,
     error:string | null,
}
const initialState:TcategoryState={
    records:[],
    loading:'idle',
    error:null,
}
const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        categoriesCleanup:(state)=>{
            state.records=[]

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actgetCategories.pending,(state)=>{
            state.loading='pending';
            state.error=null
        })
         builder.addCase(actgetCategories.fulfilled,(state,action)=>{
            state.loading = 'succeeded';
            state.records=action.payload;
        })
         builder.addCase(actgetCategories.rejected,(state,action)=>{
          state.loading = 'failed';
            state.error=action.payload as string;
        })

    }
})
export const {categoriesCleanup}=categoriesSlice.actions;

export default categoriesSlice.reducer;