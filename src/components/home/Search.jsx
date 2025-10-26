import "../../css/components/home/Search.css";

const Search = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search for a card..." className="search-box"/>
            <button className="search-button">Search</button>
        </div>
    );
};

export default Search;