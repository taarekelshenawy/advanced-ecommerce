import type { TLoading } from '@types';
import CartSkeleton from './skeletons/CartSkeleton';
import ProductSkeleton from './skeletons/ProductSkeleton';
import CategorySkeleton from './skeletons/CategorySkeleton';
import { Row } from 'react-bootstrap';


const SkeletonData ={
  Cartskeleton:CartSkeleton,
  Productskeleton:ProductSkeleton,
  categoriesskeleton:CategorySkeleton,
}

type LoadingProps ={
    loading:TLoading,
    error:string | null;
    children:React.ReactNode;
    type:keyof typeof SkeletonData,
}

export default function Loading({loading,error,children,type}:LoadingProps) {
    const Component= SkeletonData[type];
    if(loading==="pending"){
        return <Row><Component/></Row>
    }
    if(loading === "failed"){
        return <p>{error}</p>
    }
  return (
    <div>{children}</div>
  )
}
