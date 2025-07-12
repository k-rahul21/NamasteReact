import { useState } from "react";
import { useParams } from "react-router";
import RestrauntPageSkeleton from "./common/RestaurantPageSkeleton";
import RestrauntPageHeader from "./common/RestaurantPageHeader";
import OngoingDiscountBanner from "./common/OngoingDiscountBanner";
import RestaurantCategory from "./common/RestaurantCategory";
import "../RestaurantPage/RestaurantPage.css";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantPage = () => {
  const {resId} = useParams();
  const [showItems, setShowItems] = useState("");
  const {restaurantInfo, restaurantMenu} = useRestaurantMenu(resId);

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