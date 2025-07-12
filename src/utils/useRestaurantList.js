import { useEffect, useState } from "react";
import { GET_RESTAURANTS_API } from "./constants";

const useRestaurantList = () => {

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(GET_RESTAURANTS_API);
    const data = await response.json();
    setFilteredRestaurants(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  return {filteredRestaurants, setFilteredRestaurants};
}

export default useRestaurantList;