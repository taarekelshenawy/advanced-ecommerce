import { Container, Row} from "react-bootstrap";
import Product from "@components/ecommerce/Product/Product";
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";
import useProducts from "@hooks/useProducts";




const Products = () => {
const {productFullinfo,loading,error} =useProducts()

 
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