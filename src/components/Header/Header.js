import React from "react";
import "./Header.css";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router"

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
          <li> 
            <Link to="/about">
              About
            </Link>  
          </li>
          <li>
            <Link to="/card">
              Cart
            </Link>  
          </li>
          <li> 
            <Link to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Header;