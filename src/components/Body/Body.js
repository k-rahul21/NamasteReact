import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList, GET_RESTAURANTS_API } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import QuickFilters from "../QuickFilters/QuickFilters";
import SkeletonListing from "../SkeletonListing/SkeletonListing";
import { Link } from "react-router"

const Body = () => {
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

useEffect(() => {
  async function fetchData () {
    try {
      const response = await fetch(GET_RESTAURANTS_API);
      const data = await response.json();
      setFilteredRestaurants(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (error) {
      console.log("Error")
    }
  }
  fetchData();
},[])

console.log("filteredRestaurants", filteredRestaurants);

return filteredRestaurants?.length === 0 ? 
<SkeletonListing/> : (
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
      <Link to={`restaurant/${res?.info.id}`} key={res?.info?.id}>
        <RestaurantCard {...res?.info} />
      </Link>
    
  ))}</div>
  </div>
  
)
}

export default Body;