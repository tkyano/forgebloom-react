import "./../css/pages/BrowseCards.css";
import FilterSidebar from "../components/browse/FilterSidebar";
import SearchBox from "../components/browse/SearchBox";
import CardGrid from "../components/browse/CardGrid";

const BrowseCards = () => {
  return (
    <div id="content">
      <main className="browse-layout">
        <FilterSidebar />
        <section className="card-results">
          <SearchBox />
          <CardGrid />
        </section>
      </main>
    </div>
  );
};

export default BrowseCards;
