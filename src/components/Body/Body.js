import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurantsList} from "../../utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import QuickFilters from "../QuickFilters/QuickFilters";
import SkeletonListing from "../SkeletonListing/SkeletonListing";
import { Link } from "react-router"
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { filteredRestaurants, setFilteredRestaurants } = useRestaurantList();

  console.log("onlineStatus", onlineStatus)

  if (onlineStatus === false) return <h1>Seems like you're offline!! Please check your internet connection.</h1>

  return filteredRestaurants?.length === 0 || !filteredRestaurants  ? 
    <SkeletonListing/> : (
    <div className="body-section">
      {/* <SearchBar 
        restaurantsList={restaurantsList}
        setFilteredRestaurants={setFilteredRestaurants}
      /> */}
      <h1 className="mt-10 mb-2 text-2xl font-semibold">Restaurants with online food delivery in Delhi</h1>
      <QuickFilters 
        // restaurantsList={restaurantsList}
        restaurantsList={filteredRestaurants}
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