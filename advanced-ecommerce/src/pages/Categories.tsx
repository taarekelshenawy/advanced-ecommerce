import { Container, Row } from "react-bootstrap";
import Category from "@components/ecommerce/Category/Category";
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";
import useCategories from "@hooks/useCategories";




const Categories = () => {
  const {loading,error,records} =useCategories()



  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading loading={loading} error={error}>
            <Row>
                 <GridList records={records} renderItem={(record)=><Category {...record}/>}/>
            </Row>
       </Loading>
    </Container>
  );
};

export default Categories;
