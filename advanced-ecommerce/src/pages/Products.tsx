import { Container, Row, Col } from "react-bootstrap";
import Product from "@components/ecommerce/Product/Product";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetproductsbyPrefix from "@store/products/act/actGetproductsbyPrefix";
import { useParams } from "react-router-dom";
import { ProductCleanUp } from "@store/products/productsSlice";



const Products = () => {
  const {prefix}=useParams()


  const dispatch= useAppDispatch();
  const {records}=useAppSelector(state=>state.products);


  useEffect(()=>{
    
  if (prefix) {
    dispatch(actGetproductsbyPrefix(prefix));
  }

  return ()=>{
    dispatch(ProductCleanUp())
  }
    
  
  },[dispatch,prefix])

  const productsList = records.map((record)=>{
    return (
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product key={record.id} {...record}/>
        </Col>)
  })
  return (
    <Container>
      <Row>
        {productsList}
    
      </Row>
    </Container>
  );
};

export default Products;