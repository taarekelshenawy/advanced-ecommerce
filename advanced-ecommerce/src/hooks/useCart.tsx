import { useEffect } from "react";
import actAddtoCart from "@store/cart/act/actAddtoCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { cartItemChangeQuantity } from "@store/cart/cartSlice";
import { useCallback } from "react";
import { cartItemRemove } from "@store/cart/cartSlice";
import { cartCleanUp } from "@store/cart/cartSlice";

export default function useCart() {
     const dispatch = useAppDispatch();
    const {productFullinfo,items}=useAppSelector(state=>state.cart);

   

    const AllProducts=productFullinfo.map((item)=>{
        return {
            ...item,
            quantity:items[item.id],
           
        }
    })

      const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

    useEffect(()=>{
     
        dispatch(actAddtoCart())
        return ()=>{
          dispatch(cartCleanUp())
        }
        
    },[dispatch])
  return (
    {AllProducts,changeQuantityHandler,removeItemHandler}
  )
}
