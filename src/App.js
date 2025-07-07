import React from "react";
import ReactDOM from 'react-dom/client';
import "../index.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";


const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path:"restaurant/:resId",
          element: <RestaurantPage/>
        }
      ]
    },
  ])

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


// root.render(<AppLayout/>);
root.render(<RouterProvider router={router}/>);

