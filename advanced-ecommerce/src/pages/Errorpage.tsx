
import { Container } from "react-bootstrap";
import Lottiefiles from "@components/feedback/LottiefilesHandler/LottiefilesHandler";

const Error = () => {
  
  // const error = useRouteError();
  // let errorStatus: number;
  // let errorStatusText: string;

  // if (isRouteErrorResponse(error)) {
  //   errorStatus = error.status;
  //   errorStatusText = error.statusText;
  // } else {
  //   errorStatus = 404;
  //   errorStatusText = "Page Not Found";
  // }

  return (
    <Container className="notFound">
      {/* <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p> */}
      
      <Lottiefiles type="not_found" message="How about going back to safety?"/>
   
    </Container>
  );
};

export default Error;