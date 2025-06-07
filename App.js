import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => (
  <div className="header-section">
    <div className="logo">Foody Moody</div>
    <div className="nav-items">
      <ul>
        <li>About Us</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
)

const AppLayout = () => {
  return (
    <Header/>
  )
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(<AppLayout/>);

