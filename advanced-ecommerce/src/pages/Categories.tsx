import { Container, Row, Col } from "react-bootstrap";
import Category from "@components/ecommerce/Category/Category";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import actgetCategories from "@store/categories/act/actgetCategories";
import { useEffect } from "react";




const Categories = () => {
  const dispatch= useAppDispatch();
  const {records}=useAppSelector(state=>state.categories);

  useEffect(()=>{
    if(!records.length){
    dispatch(actgetCategories())
    }
   
  },[dispatch,records])

  const categoriesList = records.map((record)=>{
    return (
        <Col xs={6} key={record.id}  md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category {...record}/>
        </Col>)
  })
  return (
    <Container>
      <Row>
        {categoriesList}
       
      </Row>
    </Container>
  );
};

export default Categories;
