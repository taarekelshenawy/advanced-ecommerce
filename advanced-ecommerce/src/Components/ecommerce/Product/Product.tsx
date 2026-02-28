import { Button,Spinner} from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg,maximumNotice ,wishlistBtn } = styles;
import type { TProduct } from "src/types/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useState,useEffect, memo } from "react";
import Like from '@assets/like.svg?react';
import LikeFill from '@assets/like-fill.svg?react'
import actLikeToggle from "@store/wishlist/act/actLikeToggle";


const Product = memo(({img,title,price,id,max,quantity,isLike}:TProduct) => {
  const [isBtnClicked,setIsBtnClicked]=useState(0);
  const [isDisabledBtn,setIsDisabledBtn]=useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const dispatch=useAppDispatch();
  

const remainingQuantity = max - (quantity ?? 0);
const isOutOfStock = remainingQuantity <= 0 ? true : false;

  useEffect(()=>{
    if(!isBtnClicked){
      return;
    }
    setIsDisabledBtn(true);

    const debounce =setTimeout(() => {
      setIsDisabledBtn(false)
    }, 300);

    return ()=>clearTimeout(debounce)

  },[isBtnClicked])

  function AddproductToCart(){
    dispatch(addToCart(id))
    setIsBtnClicked((prev)=>prev+1)
  }

  function AddWishlist(){
    if(isLoading){
      return;
    }
    setIsLoading(true)
    dispatch(actLikeToggle(id)).unwrap()
    .then(()=>setIsLoading(false))
    .catch(()=>setIsLoading(false))
   

  }
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={img}
        />
        <div  className={wishlistBtn}>
          {isLoading ? <Spinner animation="border" variant="primary" size="sm" />
          :
          <>
          {
              isLike? 
                <LikeFill  onClick={()=>AddWishlist()}/> 
              : <Like onClick={()=>AddWishlist()}/>
            }
            </> 
            }

          
       
        </div>
      </div>
      <h2 >{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p>{max}</p>
      <p className={maximumNotice}>
        {isOutOfStock 
          ? "Maximum purchase reached" 
          : `You can buy ${remainingQuantity} more`}
      </p>
  
      <Button variant="info" style={{ color: "white" }}
       onClick={AddproductToCart} disabled={isDisabledBtn || isOutOfStock}>
       {isDisabledBtn ?"...loading" :"Add to cart"} 
      </Button>
    </div>
  );
});

export default Product;