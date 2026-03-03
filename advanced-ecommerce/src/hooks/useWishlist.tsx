import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetwishlist from "@store/wishlist/act/actGetwishlist";
import { wishlistCleanUp } from "@store/wishlist/wishlistSlice";

export default function useWishlist() {

const dispatch = useAppDispatch();
  const { loading, error,wishlistFullinfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetwishlist());
    return ()=>{
      dispatch(wishlistCleanUp())
    }
  
  }, [dispatch]);

  return (
   {loading,error,wishlistFullinfo,cartItems}
  )
}
