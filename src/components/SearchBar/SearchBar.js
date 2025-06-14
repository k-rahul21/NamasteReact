import { useState } from "react";

const SearchBar = ({setFilteredRestaurants, restaurantsList}) => {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (searchText, restaurantsList) => {
    return restaurantsList?.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
     <div className="search-container flex gap-2 w-4xl">
      <input 
        type="text" 
        className="focus:ring-2 focus:ring-black focus:outline-none appearance-none w-1/4 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button 
        className="bg-black text-sm text-white px-5 py-2"
        onClick={() =>  {
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