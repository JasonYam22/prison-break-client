function Searchbar({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search character..."
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
}

export default Searchbar;
