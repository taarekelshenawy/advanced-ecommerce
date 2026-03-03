import Heading from "@components/common/Heading/Heading";
import CartItemList from "@components/ecommerce/CartItemList/CartItemList";
import CartSubtotalPrice from "@components/ecommerce/Subtotal/Subtotal";
import useCart from "@hooks/useCart";


export default function Cart() {
 
  const {AllProducts,removeItemHandler,changeQuantityHandler} =useCart()
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
