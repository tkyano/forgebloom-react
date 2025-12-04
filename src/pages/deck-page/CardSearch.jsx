import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/pages/deck-page/CardSearch.css";
import CardDialog from "./CardDialog";

const CardSearch = ({ addCardToDeck }) => {
  const [allCards, setAllCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://forgebloom-server.onrender.com"
      : "http://localhost:3001";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/oracle-cards`);
        setAllCards(response.data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      }
    };
    fetchCards();
  }, [API_BASE]);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    const filtered = allCards.filter(
      (card) =>
        card.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        card.image_uris?.normal
    );
    setResults(filtered.slice(0, 25));
  }, [searchTerm, allCards]);

  const openCardDialog = (card) => setSelectedCard(card);
  const closeCardDialog = () => setSelectedCard(null);

  return (
    <section className="card-search">
      <input
        type="search"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-results-grid">
        {results.map((card) => (
          <div
            key={card.id || card.name}
            className="card-result"
            onClick={() => openCardDialog(card)}
          >
            {card.image_uris?.normal && (
              <img src={card.image_uris.normal} alt={card.name} />
            )}
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      <CardDialog
        card={selectedCard}
        onClose={closeCardDialog}
        onAdd={(card, count) => {
          addCardToDeck(card, count);   // <-- pass count to DeckPage
          closeCardDialog();
        }}
      />

    </section>
  );
};

export default CardSearch;
