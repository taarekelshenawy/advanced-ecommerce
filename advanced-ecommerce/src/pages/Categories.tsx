import { Container, Row } from "react-bootstrap";
import Category from "@components/ecommerce/Category/Category";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import actgetCategories from "@store/categories/act/actgetCategories";
import { useEffect } from "react";
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";




const Categories = () => {
  const dispatch= useAppDispatch();
  const {loading,error,records}=useAppSelector(state=>state.categories);

  useEffect(()=>{
    if(!records.length){
    dispatch(actgetCategories())
    }
   
  },[dispatch,records])



  // const categoriesList = records.map((record)=>{
  //   return (
  //       <Col xs={6} key={record.id}  md={3} className="d-flex justify-content-center mb-5 mt-2">
  //            <Category {...record}/>
  //       </Col>
  //       )
  // })
  return (
    <Container>
      <Loading loading={loading} error={error}>
            <Row>
                 <GridList records={records} renderItem={(record)=><Category {...record}/>}/>
            </Row>
       </Loading>
    </Container>
  );
};

export default Categories;
