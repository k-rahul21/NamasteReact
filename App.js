import React from "react";
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById("root"));
const nestedElementWithSiblings = React.createElement("div", {id: "parent"},
  React.createElement("div", {id: "child"}, 
    [
      React.createElement("h1", {id: "heading"}, "Hello from Nested Container"),
      React.createElement("h1", {id: "sibling"}, "Hello, I'm Siblingg")
    ]
  )
)

root.render(nestedElementWithSiblings);

