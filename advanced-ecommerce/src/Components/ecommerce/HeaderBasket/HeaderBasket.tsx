
import Logo from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
const { basketContainer, basketQuantity,pumpCartQuantity} = styles;
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useState ,useEffect} from "react";

const HeaderBasket = () => {
  const [isAnimate,setIsAnimate]=useState(false);
  const cartQunatity = useAppSelector(state=>getCartTotalQuantitySelector(state));
  const cartQuantitystyles=`${basketQuantity} ${isAnimate ? pumpCartQuantity:""} `



  useEffect(()=>{
    if(!cartQunatity){
      return;
    }
    setIsAnimate(true);
    const debounce=setTimeout(() => {
      setIsAnimate(false)
      
    }, 300);
    return ()=>clearTimeout(debounce)

  },[cartQunatity])
  
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={cartQuantitystyles}>{cartQunatity}</div>
    </div>
  );
};

export default HeaderBasket;