import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;
import type { TProduct } from "src/types/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useState,useEffect } from "react";

const Product = ({img,title,price,id}:TProduct) => {
  const [isBtnClicked,setIsBtnClicked]=useState(0);
  const [isDisabledBtn,setIsDisabledBtn]=useState(false);
  const dispatch=useAppDispatch()

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
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={img}
        />
      </div>
      <h2 >{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}
       onClick={AddproductToCart} disabled={isDisabledBtn}>
       {isDisabledBtn ?"...loading" :"Add to cart"} 
      </Button>
    </div>
  );
};

export default Product;