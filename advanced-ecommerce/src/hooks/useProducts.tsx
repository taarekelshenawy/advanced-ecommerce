import { useParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetproductsbyPrefix from "@store/products/act/actGetproductsbyPrefix";
import { ProductCleanUp } from "@store/products/productsSlice";


export default function useProducts() {
 const {prefix}=useParams()
 const dispatch= useAppDispatch();
 const {loading,error,records}=useAppSelector(state=>state.products);
 const cartItems=useAppSelector(state=>state.cart.items);
 const wishlist = useAppSelector(state=>state.wishlist.itemId);

 const productFullinfo=records.map((el)=>{
  return(
    {
      ...el,
      quantity:cartItems[el.id],
       isLike:wishlist.includes(el.id)
    }
  )
 }

 )


  useEffect(()=>{

   if(!prefix) return;
   const promise= dispatch(actGetproductsbyPrefix(prefix));
    
  

  return ()=>{
    promise.abort()
    dispatch(ProductCleanUp())
  }
    
  
  },[dispatch,prefix])

  return (
    {productFullinfo,loading,error}
  )
}
