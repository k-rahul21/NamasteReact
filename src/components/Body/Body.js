import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList } from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import QuickFilters from "../QuickFilters/QuickFilters";
import SkeletonListing from "../SkeletonListing/SkeletonListing";

const Body = () => {
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

useEffect(() => {
  async function fetchData () {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4401115&lng=77.07312739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setFilteredRestaurants(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (error) {
      console.log("Error")
    }
  }
  fetchData();
},[])

console.log("filteredRestaurants", filteredRestaurants);

return filteredRestaurants.length === 0 ? 
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
    <RestaurantCard {...res?.info} key={res?.info?.id}/>
  ))}</div>
  </div>
  
)
}

export default Body;