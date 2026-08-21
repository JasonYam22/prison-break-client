function Searchbar({query, setQuery}) {
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    return(
        <div className="search-bar">
            <h2>Search Bar</h2>
            <input type="text" placeholder="Search character..." onChange={handleSearch} value={query}/>
        </div>
    )
}

export default Searchbar