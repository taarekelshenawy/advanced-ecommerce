import ContentLoader from "react-content-loader"
import { Col } from "react-bootstrap"
export default function CategorySkeleton() {
  return (

        
    Array(4).fill(0).map((_,index)=>{
        return(
     <Col xs={6}  key={index} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <ContentLoader
          speed={2}
          width={200}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="61" y="179" rx="3" ry="3" width="85" height="6" />
          <circle cx="104" cy="84" r="84" />
        </ContentLoader>

    </Col>
    

        )
    })


    
  )
}
