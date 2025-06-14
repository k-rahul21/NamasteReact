import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import QuickFilters from "../QuickFilters/QuickFilters";

const Body = () => {
const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsList);

// useEffect(() => {
//   async function fetchData () {
//     try {
//       const response = await fetch("http://localhost:5000/");
//       const data = await response.text();
//       console.log("Data", data)
//     } catch (error) {
//       console.log("Error")
//     }
//   }
//   fetchData();
// },[])

console.log("filteredRestaurants", filteredRestaurants);

return restaurantsList.length === 0 ? 
<div>No Restaurants in this area.</div>
: (
  <div className="body-section">
    {/* <SearchBar 
      restaurantsList={restaurantsList}
      setFilteredRestaurants={setFilteredRestaurants}
    /> */}
    <h1 className="mt-10 mb-2 text-2xl font-semibold">Restaurants with online food delivery in Delhi</h1>
    <QuickFilters 
      restaurantsList={restaurantsList}
      setFilteredRestaurants={setFilteredRestaurants}
    />
    <div className="restaurant-list gap-2">{filteredRestaurants?.map((res) => (
    <RestaurantCard {...res?.info} key={res?.info?.id}/>
  ))}</div>
  </div>
  
)
}

export default Body;