import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import Home from '../../Pages/Home/Home';


const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home></Home>
        }
    ])

    return (
       <RouterProvider router={router}>

       </RouterProvider>
    );
};

export default Router;