import { useAppDispatch,useAppSelector } from "@store/hooks";
import actgetCategories from "@store/categories/act/actgetCategories";
import { useEffect } from "react";
import { categoriesCleanup } from "@store/categories/categoriesSlice";

export default function useCategories() {
  const dispatch= useAppDispatch();
  const {loading,error,records}=useAppSelector(state=>state.categories);

  useEffect(()=>{
  
    dispatch(actgetCategories())
    
    return()=>{
      dispatch(categoriesCleanup())

    }
   
  },[dispatch])

  return (
    {loading,error,records}
  )
}
