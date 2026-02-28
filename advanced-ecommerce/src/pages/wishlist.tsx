import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetwishlist from "@store/wishlist/act/actGetwishlist";
import Heading from "@components/common/Heading/Heading";
import GridList from "@components/common/GridList/GridList";
import Product from "@components/ecommerce/Product/Product";
import type { TProduct } from "src/types/product";
import Loading from "@components/feedback/Loading";
import { ProductCleanUp } from "@store/products/productsSlice";
const Wishlist = () => {
  
  const dispatch = useAppDispatch();
  const { loading, error,wishlistFullinfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetwishlist());
    return ()=>{
      ProductCleanUp()
    }
  
  }, [dispatch]);

  const records = wishlistFullinfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLike: true,
  }));

  return (
    <>
      <Heading>Your Wishlist</Heading>
   
      {wishlistFullinfo.length === 0 ? <div>there is no products</div> :
       <Loading loading={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
      }
     
     
    </>
  );
};

export default Wishlist;





// import Heading from "@components/common/Heading/Heading";
// import { useAppSelector,useAppDispatch } from "@store/hooks";
// import { useEffect } from "react";
// import actGetwishlist from "@store/wishlist/act/actGetwishlist";

// export default function Wishlist() {
//   const dispatch = useAppDispatch();
//    const wishlist = useAppSelector((state)=>state.wishlist.wishlistFullinfo)
// console.log(wishlist)
//   useEffect(()=>{
//     dispatch(actGetwishlist())

//   },[dispatch])
 
//   return (
//     <div>
//       <Heading>whishlist</Heading>
//     </div>
//   )
// }
