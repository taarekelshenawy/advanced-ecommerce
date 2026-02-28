import Heading from "@components/common/Heading/Heading";
import CartItemList from "@components/ecommerce/CartItemList/CartItemList";
import { useEffect } from "react";
import actAddtoCart from "@store/cart/act/actAddtoCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { cartItemChangeQuantity } from "@store/cart/cartSlice";
import { useCallback } from "react";
import { cartItemRemove } from "@store/cart/cartSlice";
import CartSubtotalPrice from "@components/ecommerce/Subtotal/Subtotal";


export default function Cart() {
    const dispatch = useAppDispatch();
    const {productFullinfo,items}=useAppSelector(state=>state.cart);
   

    const AllProducts =productFullinfo.map((item)=>{
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
    },[dispatch])
  return (
    <>
        <Heading>Cart</Heading>
        {AllProducts.length ? (
          <>
            <CartItemList
              products={AllProducts}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
          </>
        ) : (
          "Your Cart is empty"
        )}
        <CartSubtotalPrice products={AllProducts}/>
        
    </>

  )
}
