import not_found from '@assets/Lonely 404.json';
import empty from '@assets/empty.json';
import Lottie from 'lottie-react';

const LottieFiles={
    not_found,
    empty,
}

type LottieHandlerProps={
    type:keyof typeof LottieFiles,
    message:string,
}
export default function LottiefilesHandler({type,message}:LottieHandlerProps) {
    const lottie=LottieFiles[type]
  return (
    <>
          <div className="d-flex justify-content-center align-items-center flex-column" >
                   <Lottie animationData={lottie} loop={true} />
                    <p>
                      {message}
                    </p>

          </div>

    </>
 
  )
}
