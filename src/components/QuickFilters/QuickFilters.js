import { quickFiltersList } from "../../utils/constants";

const QuickFilters = ({restaurantsList, setFilteredRestaurants}) => {
  
  const toggleHandler = (selectedFilter) => {
    console.log("selected filter", selectedFilter)
  }

  return (
    <div className="quick-filters-section">
      <ul className="quick-filters">
        {quickFiltersList.map((filter, index) => (
          <li key={index}>
            <button 
              onClick={() => toggleHandler(filter)}
            >
              {filter.label}
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  
  )
}

export default QuickFilters;