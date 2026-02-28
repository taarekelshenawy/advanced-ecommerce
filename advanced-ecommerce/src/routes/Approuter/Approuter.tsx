

import { MainLayout } from '@layouts/MainLayout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Errorpage from '@pages/Errorpage';
import Cart from '@pages/Cart';
import Wishlist from '@pages/wishlist';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<Errorpage/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
    {
        path: "/categories",
        element: <Categories/>
      },
       {
        path: "/cart",
        element: <Cart/>
      },
       {
        path: "/wishlist",
        element: <Wishlist/>
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
