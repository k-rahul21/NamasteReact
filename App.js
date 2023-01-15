import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1", 
  {
    id: "title"
  }, 
  "Namaste Everyone"
);

const heading2 = React.createElement(
  "h2", 
  {
    id: "title"
  }, 
  "This is Rahul"
);

const container = React.createElement(
  "div",
  {
    id: "container"
  },
  [heading, heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(container);