import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from "./components/Header/Header";
import Restaurants from "./components/Restaurants/Restaurants";


const AppLayout = () => {
  return (
    <>
      <Header/>
      <Restaurants/>
    </>
   
  )
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<AppLayout/>);

