import type { TLoading } from "src/types/shared";

type LoadingProps ={
    loading:TLoading,
    error:string | null;
    children:React.ReactNode;
}

export default function Loading({loading,error,children}:LoadingProps) {
    if(loading==="pending"){
        return <p>please loading ...</p>
    }
    if(loading === "failed"){
        return <p>{error}</p>
    }
  return (
    <div>{children}</div>
  )
}
