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
        className="border border-white rounded-full px-4 py-2 bg-transparent text-white placeholder-gray-400"
      />
    </div>
  );
}

export default Searchbar;
