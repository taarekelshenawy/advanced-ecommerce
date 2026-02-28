import { Container, Row} from "react-bootstrap";
import Product from "@components/ecommerce/Product/Product";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetproductsbyPrefix from "@store/products/act/actGetproductsbyPrefix";
import { useParams } from "react-router-dom";
import { ProductCleanUp } from "@store/products/productsSlice";
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";




const Products = () => {
  const {prefix}=useParams()
  const dispatch= useAppDispatch();
  const {loading,error,records}=useAppSelector(state=>state.products);
 const cartItems=useAppSelector(state=>state.cart.items);
    const wishlist = useAppSelector(state=>state.wishlist.itemId);

 const productFullinfo=records.map((el)=>{
  return(
    {
      ...el,
      quantity:cartItems[el.id],
       isLike:wishlist.includes(el.id)
    }
  )
 }

 )


  useEffect(()=>{
    
  if (prefix) {
    dispatch(actGetproductsbyPrefix(prefix));
  }

  return ()=>{
    dispatch(ProductCleanUp())
  }
    
  
  },[dispatch,prefix])

 
  return (
    <Container>
      <Heading>Proudcts</Heading>
      <Loading loading={loading} error={error}>
           <Row>
             <GridList records={productFullinfo} renderItem={(record)=><Product {...record}/>}/>
          </Row>

      </Loading>
   
    </Container>
  );
};

export default Products;