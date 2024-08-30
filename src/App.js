import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// Chunking
// code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand Loading
// dynamic import

const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading...........</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }

    ],
    errorElement:<Error/>
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
