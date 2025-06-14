import React from "react";
import ReactDOM from 'react-dom/client';
import "../index.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


const AppLayout = () => {
  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<AppLayout/>);

