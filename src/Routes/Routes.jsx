import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import FoodDetails from "../Pages/FoodDetails";
import FoodPurchase from "../Pages/FoodPurchase";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index:true,
          element:<Home></Home>,
        },
        {
          path:"/allfoods",
          element:<AllFoods></AllFoods>,
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/details/:id",
          element:<FoodDetails></FoodDetails>,
        },
        {
          path:"/foodpurchase/:id",
          element:<FoodPurchase></FoodPurchase>,
        },
      ]
    },
  ]);