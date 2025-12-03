import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/components/home/FeaturedDecks.css";
import "../../css/components/decks/Deck.css";

const FeaturedDecks = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/featured-decks"
        );

        // Always ensure array
        if (Array.isArray(response.data)) setDecks(response.data);
        else setDecks([]);
      } catch (error) {
        console.error("Error fetching featured decks:", error);
        setDecks([]);
      }
    };

    fetchDecks();
  }, []);

  return (
    <section className="featured-decks-container">
      {decks.length > 0 ? (
        decks.slice(0, 4).map((deck) => (
          <div key={deck._id} className="deck-card">
            <div className="deck-image-wrapper">
              <img src={deck.image} alt={deck.name} className="deck-image" />
            </div>
            <div className="deck-info">
              <p className="deck-name">{deck.name}</p>
              <p className="deck-description">{deck.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading featured decks...</p>
      )}
    </section>
  );
};

export default FeaturedDecks;
