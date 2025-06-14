import React from "react";
import "./Header.css";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <Title/>
      <SearchBar 
        // restaurantsList={restaurantsList}
        // setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="nav-items">
        <ul>
          <li>About </li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}


export default Header;