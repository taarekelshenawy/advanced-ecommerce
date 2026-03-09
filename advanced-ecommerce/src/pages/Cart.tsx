import Heading from "@components/common/Heading/Heading";
import CartItemList from "@components/ecommerce/CartItemList/CartItemList";
import CartSubtotalPrice from "@components/ecommerce/Subtotal/Subtotal";
import useCart from "@hooks/useCart";
import Lottiefiles from '@components/feedback/LottiefilesHandler/LottiefilesHandler'


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
           <Lottiefiles type="empty" message="there is no products"/>
        )}
        <CartSubtotalPrice products={AllProducts}/>
        
    </>

  )
}
