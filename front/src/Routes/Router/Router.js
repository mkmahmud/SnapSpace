import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import Main from '../../Layout/Main';
import AboutUs from '../../Pages/Aboutus/AboutUs';
import GetInTouch from '../../Pages/GetInTouch/GetInTouch';
import Home from '../../Pages/Home/Home';
import Office_Questions from '../../Pages/Office_Questions/Office_Questions';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import Wellcome from '../../Pages/SignUp/Wellcome/Wellcome';
import Tarmes from '../../Pages/Tarmes/Tarmes';



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
                },
                {
                    path:'wellcome',
                    element:<Wellcome></Wellcome>
                },
                {
                    path:'about',
                    element:<AboutUs></AboutUs>
                },
                {
                    path:'/tarms',
                    element:<Tarmes></Tarmes>
                },
                {
                    path:'getintouch',
                    element:<GetInTouch></GetInTouch>
                },
                {
                    path:'/officeQuestion',
                    element:<Office_Questions></Office_Questions>
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