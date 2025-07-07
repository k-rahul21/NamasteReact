import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { GET_RESTAURANT_MENU } from "../../utils/constants";
import RestrauntPageSkeleton from "./common/RestaurantPageSkeleton";
import RestrauntPageHeader from "./common/RestaurantPageHeader";
import OngoingDiscountBanner from "./common/OngoingDiscountBanner";
import RestaurantCategory from "./common/RestaurantCategory";
import "../RestaurantPage/RestaurantPage.css";


const RestaurantPage = () => {
  const {resId} = useParams();
  const [showItems, setShowItems] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState('')
  const [restaurantMenu, setRestaurantMenu] = useState('')

  const fetchData = async () => {
    const response = await fetch(`${GET_RESTAURANT_MENU}restaurantId=${resId}`);
    const data = await response.json();
    setRestaurantInfo(data?.data?.cards?.[2]?.card?.card?.info)
    setRestaurantMenu(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    console.log("dataa", data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (!restaurantInfo) return <RestrauntPageSkeleton />;
  console.log("res menu", restaurantMenu)


  return (
    <div className="restraunt-menu-container w-7/12 m-auto">
      <RestrauntPageHeader restaurantInfo={restaurantInfo} />
      <div className="dotted-line mt-2"></div>
      <OngoingDiscountBanner restaurantInfo={restaurantInfo} />
      <div className="dotted-line mt-2"></div>
      {restaurantMenu.map((menu, index) => {
        if(index === 0 ) return null;
        console.log("menu", menu)
        return (
          <RestaurantCategory
          menu={menu.card.card}
          key={menu.card.card.title}
          showItems={index === showItems}
          setShowItems={() => setShowItems(index)}
        />
        )
        
      })}
    </div>
  );
};

export default RestaurantPage;