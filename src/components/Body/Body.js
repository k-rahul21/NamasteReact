import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";

const Body = () => {
const [searchText, setSearchText] = useState('');

return restaurantsList.length === 0 ? 
<div>No Restaurants in this area.</div>
: (
  <div className="body-section">
    <SearchBar 
      searchText={searchText}
      setSearchText={setSearchText}
    />
    <h2 className="mt-10 text-2xl font-semibold">Restaurants with online food delivery in Delhi</h2>
    <div className="restaurant-list">{restaurantsList.map((res) => (
    <RestaurantCard {...res.info} key={res.info.id}/>
  ))}</div>
  </div>
  
)
}

export default Body;