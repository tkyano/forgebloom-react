import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/pages/deck-page/CardSearch.css";

const CardSearch = ({ addCardToDeck }) => {
  const [allCards, setAllCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://forgebloom-server.onrender.com/api/oracle-cards");
        setAllCards(response.data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    const filtered = allCards.filter(card =>
      card.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      card.image_uris?.normal
    );
    setResults(filtered.slice(0, 25));
  }, [searchTerm, allCards]);

  return (
    <section className="card-search">
      <input
        type="search"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-results-grid">
        {results.map(card => (
          <div key={card.id || card.name} className="card-result">
            {card.image_uris?.normal && (
              <img src={card.image_uris.normal} alt={card.name} />
            )}
            <p>{card.name}</p>
            <button onClick={() => addCardToDeck(card)}>Add</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSearch;
