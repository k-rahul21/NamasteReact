import React from "react";
import ReactDOM from 'react-dom/client'

const Heading = () => (<h1>Hello From Functional Component</h1>)
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<Heading/>);

