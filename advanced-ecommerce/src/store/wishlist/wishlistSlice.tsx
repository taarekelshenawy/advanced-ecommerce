import { createSlice } from "@reduxjs/toolkit";
import type { TLoading   } from "src/types/shared";
import type { TProduct } from "src/types/product";
import actAddtoWishlist from "./act/actLikeToggle";
import actGetwishlist from "./act/actGetwishlist";

type stateProps={
    itemId:number[],
    wishlistFullinfo:TProduct[]
    loading:TLoading,
    error:string | null;
     
}
const initialState:stateProps={
    itemId:[],
    wishlistFullinfo:[],
    loading:"idle",
    error:null
}
const wishListSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
          ProductCleanUp:(state)=>{
            state.wishlistFullinfo=[];
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(actAddtoWishlist.pending,(state)=>{
            state.error=null

        })
         builder.addCase(actAddtoWishlist.fulfilled,(state,action)=>{
            if(action.payload.type==="add"){
                state.itemId.push(action.payload.id)
            }
            if(action.payload?.type === "remove"){
                state.itemId = state.itemId.filter(
                    (el)=> el !== action.payload.id
                )
                state.wishlistFullinfo=state.wishlistFullinfo.filter((el)=>el.id !== action.payload.id)
            }
           
    
        })
         builder.addCase(actAddtoWishlist.rejected,(state,action)=>{
            state.loading="failed"
            state.error=action.payload as string

        })

        // get wishlist 

        builder.addCase(actGetwishlist.pending,(state)=>{
            state.loading='pending'
            state.error=null

        })
         builder.addCase(actGetwishlist.fulfilled,(state,action)=>{
          state.loading="succeeded"
          state.wishlistFullinfo=action.payload
           
    
        })
         builder.addCase(actGetwishlist.rejected,(state,action)=>{
            state.loading="failed"
            state.error=action.payload as string

        })
    }

 
})

export const {ProductCleanUp}=wishListSlice.actions;



export default wishListSlice .reducer;