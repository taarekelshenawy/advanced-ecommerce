
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import type{ TProduct } from "src/types/product";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};



const CartItem = ({id,title,price,img,quantity,max,changeQuantityHandler,removeItemHandler}:CartItemProps)=>{
   const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

      function changeQuantity(event: React.ChangeEvent<HTMLSelectElement>){
        const quantityitem= +event.target.value;
        changeQuantityHandler(id,quantityitem)

      }

      
  
   return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={img} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price.toFixed(2)} EGP</h3>
            <p>qunatity:{quantity}</p>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
              onClick={()=>removeItemHandler(id)}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity} >
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );

}
   
 


export default CartItem;