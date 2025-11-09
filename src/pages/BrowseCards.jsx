import { useState, useEffect } from "react";
import "./../css/pages/BrowseCards.css";
import FilterSidebar from "../components/browse/FilterSidebar";
import SearchBox from "../components/browse/SearchBox";
import CardGrid from "../components/browse/CardGrid";
import axios from "axios";

const BrowseCards = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all oracle cards once
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://tkyano.github.io/csce242/projects/part7/json/oracle-cards.json"
        );
        setCards(response.data);
        setFilteredCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  // Whenever the search query changes, filter cards
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = cards.filter(
      (card) =>
        card.name.toLowerCase().includes(query) ||
        card.type_line?.toLowerCase().includes(query)
    );
    setFilteredCards(results);
  }, [searchQuery, cards]);

  return (
    <div id="content">
      <main className="browse-layout">
        <FilterSidebar />
        <section className="card-results">
          <SearchBox onSearch={(query) => setSearchQuery(query)} />
          <CardGrid cards={filteredCards} />
        </section>
      </main>
    </div>
  );
};

export default BrowseCards;
