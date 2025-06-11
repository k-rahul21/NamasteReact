const SearchBar = ({searchText, setSearchText}) => {
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
        const data = searchHandler(searchText, restaurants);
        setFilteredRestaurants(data);
      }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar