import { useEffect, useState } from "react";
import { quickFiltersList } from "../../utils/constants";
import "./QuickFilters.css"

const QuickFilters = ({restaurantsList, setFilteredRestaurants}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedFilterIds, setSelectedFilterIds] = useState([]);

  const filterRestaurantFunc = (selectedFilters) => {
    const res = restaurantsList.filter(({info}) => {
     return selectedFilters.every(({value, id, valueType, comparison, uuid }) => {
        if(valueType === Number) {
        if(comparison === 'lte') return info[id] <= value;
        if(comparison === 'gte') return info[id] >= value
      }
      if(valueType === Boolean) {
        return info[id] === value;
      }
      })
    })
    return res;
  }

  const handleToggle = (choosenFilter) => {
    const isAlreadySelected = selectedFilters.some(
      (selected) => selected.id === choosenFilter.id);

    if(isAlreadySelected) {
      const updatedFilter = selectedFilters.filter(
        (selected) => selected.id !== choosenFilter.id);
        setSelectedFilters(updatedFilter);
        setSelectedFilterIds(updatedFilter.map((updated) => updated.uuid));
    } else {
      setSelectedFilters([...selectedFilters, choosenFilter]);
      setSelectedFilterIds(prev => [...prev, choosenFilter.uuid]);
    }
  }

  useEffect(() => {
    if(selectedFilters.length) {
      const filteredRestaurants = filterRestaurantFunc(selectedFilters);
      setFilteredRestaurants([...filteredRestaurants])
    } else {
      setFilteredRestaurants(restaurantsList)
    }

  }, [selectedFilters])

  return (
    <div className="quick-filters-section">
      <ul className="quick-filters">
        {quickFiltersList.map((filter) => (
          <li key={filter.uuid}>
            <button className={selectedFilterIds.includes(filter.uuid) ? 'quick-filter-selected-btn': ''}
              onClick={() => {
                handleToggle(filter);
            }}
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