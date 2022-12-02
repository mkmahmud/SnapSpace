import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';



const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<SignIn></SignIn>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                }
            ]
        }
    ])

    return (
       <RouterProvider router={router}>

       </RouterProvider>
    );
};

export default Router;