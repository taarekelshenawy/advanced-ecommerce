
import { useNavigate } from "react-router-dom";
import Logo from "@assets/wishlist.svg?react";
import { useAppSelector } from "@store/hooks";

import styles from "./styles.module.css";
const { container, totalNum, iconWrapper } = styles;

const HeaderWishlist = () => {
  const navigate = useNavigate();
  const wishlistQuantity=useAppSelector((state)=>state.wishlist.itemId) 




  return (
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
          <div className={totalNum}>{wishlistQuantity.length}</div>

      </div>
      <h3>Wishlist</h3>
    </div>
  );
};

export default HeaderWishlist;