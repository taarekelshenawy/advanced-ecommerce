import { createSlice,createSelector } from "@reduxjs/toolkit";
import type { TProduct } from "src/types/product";
import type { RootState } from "../index";

type stateProps={
    items:{[key:number]:number},
    productFullinfo:TProduct[],
     
}
const initialState:stateProps={
    items:{},
    productFullinfo:[],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
      
            const id = action.payload;
            if(state.items[id]){
                state.items[id]++;
            }else{
                state.items[id]=1;
            }
        }
    },

 
})
const getCartTotalQuantitySelector=createSelector((state)=>state.cart.items,
(items:RootState)=>{
    console.log('function')
     const totalQuantity =
    Object.values(items).reduce((acc,cur)=>acc + +cur,0);

  return totalQuantity;

})


export {getCartTotalQuantitySelector};

export const {addToCart}=cartSlice.actions;

export default cartSlice.reducer;