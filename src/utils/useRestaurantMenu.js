import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState('')
  const [restaurantMenu, setRestaurantMenu] = useState('')

  useEffect(() => {
    fetchData(resId);
  },[])

  const fetchData = async (resId) => {
    const response = await fetch(`${GET_RESTAURANT_MENU}restaurantId=${resId}`);
    const data = await response.json();
    setRestaurantInfo(data?.data?.cards?.[2]?.card?.card?.info)
    setRestaurantMenu(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  return {restaurantInfo, restaurantMenu}

}

export default useRestaurantMenu;