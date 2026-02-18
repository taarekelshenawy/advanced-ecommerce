import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;
import type { TProduct } from "src/types/product";

const Product = ({img,title,price}:TProduct) => {
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
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;