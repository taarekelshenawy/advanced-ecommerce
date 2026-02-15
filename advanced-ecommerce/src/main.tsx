
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from '@layouts/MainLayout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
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
        path: "/product/:prefix",
        element: <Products/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
