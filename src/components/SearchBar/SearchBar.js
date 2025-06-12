import { useState } from "react";

const SearchBar = ({setFilteredRestaurants, restaurantsList}) => {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (searchText, restaurantsList) => {
    return restaurantsList?.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
     <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-btn text-14" onClick={() =>  {
        const data = searchHandler(searchText, restaurantsList);
        setFilteredRestaurants(data);
      }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar