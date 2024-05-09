import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
      ]
    },
  ]);