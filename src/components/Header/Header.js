import React from "react";
import "./Header.css";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router"
import { UserRound, ShoppingCart } from "lucide-react"

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
          <Link to="/checkout">
            <li>
              <ShoppingCart/>
              <p>Cart</p>
            </li>
          </Link>  
          <Link to="sign">
            <li> 
              <UserRound/>
              <p>Sign In</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}


export default Header;