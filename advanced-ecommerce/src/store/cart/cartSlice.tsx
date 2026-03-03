import { createSlice,createSelector } from "@reduxjs/toolkit";
import type { TProduct } from "@types";
import type { RootState } from "../index";
import actAddtoCart from "./act/actAddtoCart";
import type { TLoading  } from "@types";

type stateProps={
    items:{[key:number]:number},
    productFullinfo:TProduct[],
    loading:TLoading,
    error:string | null;
     
}
const initialState:stateProps={
    items:{},
    productFullinfo:[],
    loading:"idle",
    error:null
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        cartCleanUp:(state)=>{
            state.productFullinfo=[];
        },
       
        addToCart:(state,action)=>{
      
            const id = action.payload;
            if(state.items[id]){
                state.items[id]++;
            }else{
                state.items[id]=1;
            }
        },
        cartItemChangeQuantity:(state,action)=>{
            state.items[action.payload.id]=action.payload.quantity;

        },
        cartItemRemove:(state,action)=>{
           delete state.items[action.payload];
          state.productFullinfo= state.productFullinfo.filter(
        (el) => el.id !== action.payload
      );

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actAddtoCart.pending,(state)=>{
            state.loading="pending"
            state.error=null

        })
         builder.addCase(actAddtoCart.fulfilled,(state,action)=>{
            state.loading="succeeded"
            state.productFullinfo=action.payload

        })
         builder.addCase(actAddtoCart.rejected,(state,action)=>{
            state.loading="failed"
            state.error=action.payload as string

        })
    }

 
})
const getCartTotalQuantitySelector=createSelector((state)=>state.cart.items,
(items:RootState)=>{
   
     const totalQuantity =
    Object.values(items).reduce((acc,cur)=>acc + +cur,0);

  return totalQuantity;

})


export {getCartTotalQuantitySelector};

export const {addToCart,cartItemChangeQuantity,cartItemRemove,cartCleanUp}=cartSlice.actions;

export default cartSlice.reducer;