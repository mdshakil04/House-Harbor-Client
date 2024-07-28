import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/ErrorPage";
import Appartements from "../Pages/Appartements/Appartements";
import PropertyOffers from "../Pages/Home/PropertyOffers/PropertyOffers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/appartments',
          element:<Appartements></Appartements>
        },
        {
          path:"/property",
          element:<PropertyOffers></PropertyOffers>
        }
      ]
    },
  ]);