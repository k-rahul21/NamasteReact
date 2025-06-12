import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import QuickFilters from "../QuickFilters/QuickFilters";

const Body = () => {
const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsList);

return restaurantsList.length === 0 ? 
<div>No Restaurants in this area.</div>
: (
  <div className="body-section">
    <SearchBar 
      restaurantsList={restaurantsList}
      setFilteredRestaurants={setFilteredRestaurants}
    />
    <h2 className="mt-10 text-2xl font-semibold">Restaurants with online food delivery in Delhi</h2>
    <QuickFilters 
      restaurantsList={restaurantsList}
      setFilteredRestaurants={setFilteredRestaurants}
    />
    <div className="restaurant-list">{filteredRestaurants?.map((res) => (
    <RestaurantCard {...res.info} key={res.info.id}/>
  ))}</div>
  </div>
  
)
}

export default Body;