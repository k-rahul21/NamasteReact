import { IMG_CDN_URL } from "../../utils/constants";
import './RestaurantCard.css'

const RestaurantCard = ({avgRating, aggregatedDiscountInfo,  name, cuisines, costForTwo, sla, cloudinaryImageId, id}) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-card-img" src={
        IMG_CDN_URL + 
        cloudinaryImageId
      } 
      />
      <div className="product-name">{name}</div>
      <div className="product-description">{cuisines?.join(", ")}</div>
      <div className="product-extra-info">
        {avgRating !== '--' && 
          <div className="product-rating">⭐{avgRating}</div>
        }
        <div className="product-delivery-time">{sla?.deliveryTime} MINS</div>
        <div className="product-cost">{costForTwo} </div>
      </div>
      {aggregatedDiscountInfo?.descriptionList?.[0].meta && (
        <>
         {/* <div className="horizontal-line"></div> */}
         <div className="product-ongoing-offer">{aggregatedDiscountInfo?.descriptionList?.[0].meta}</div>
        </>
      )}
    </div>
  )
}

export default RestaurantCard;