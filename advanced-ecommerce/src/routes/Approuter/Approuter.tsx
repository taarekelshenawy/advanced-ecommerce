import { lazy, Suspense } from 'react';

import { MainLayout } from '@layouts/MainLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from '@pages/Errorpage'
const Home =lazy(()=>import('@pages/Home'));
const Categories = lazy(()=>import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/wishlist"));



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<Errorpage/>,
    children: [
      {
        index:true,
        element:
        <Suspense fallback="loading please wait ....">
          <Home/>
        </Suspense>
     
      },
    {
        path: "/categories",
        element:
         <Suspense fallback="loading please wait ....">
         <Categories/>
        </Suspense> 
      },
       {
        path: "/cart",
        element:  <Suspense fallback="loading please wait ....">
         <Cart/>
        </Suspense> 
      },
       {
        path: "/wishlist",
        element:  <Suspense fallback="loading please wait ">
         <Wishlist/>
        </Suspense> 
      },
     {
        path: "/product/:prefix",
        element: <Products/>,
        loader:({params})=>{
             const { prefix } = params;
            const regex = /^[a-zA-Z]+$/;
            if (typeof prefix !== "string" || !regex.test(prefix)) {
                throw new Response("Invalid prefix", { status: 400 ,statusText:"Category not found"});
            }
            return true;
        }
      },
       {
        path: "/login",
        element: <Login/>
      },
       {
        path: "/register",
        element: <Register/>
      },
    ],
  },
]);


export default function Approuter() {
  return (
    <RouterProvider router={router} />
  )
}
