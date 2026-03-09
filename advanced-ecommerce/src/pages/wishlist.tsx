
import Heading from "@components/common/Heading/Heading";
import GridList from "@components/common/GridList/GridList";
import Product from "@components/ecommerce/Product/Product";
import type { TProduct } from "@types";
import Loading from "@components/feedback/Loading";
import useWishlist from "@hooks/useWishlist";


const Wishlist = () => {
  const {loading,error,wishlistFullinfo,cartItems} =useWishlist()

  const records = wishlistFullinfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLike: true,
  }));

  return (
    <>
      <Heading>Your Wishlist</Heading>
   
      {wishlistFullinfo.length === 0 ? <div>there is no products</div> :
       <Loading loading={loading} error={error} type="Cartskeleton">
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
