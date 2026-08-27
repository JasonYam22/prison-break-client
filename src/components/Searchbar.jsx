function Searchbar({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="hover:scale-110 transition-all duration-300">
      <input
        type="text"
        placeholder="Search character..."
        onChange={handleSearch}
        value={query}
        className="border border-white rounded-full pl-5 pr-10 py-2 bg-transparent text-white placeholder-grays-400"
      />
    </div>
  );
}

export default Searchbar;
