import React from "react";
import "../../css/pages/deck-page/CurrentDeck.css";

const CurrentDeck = ({ cards = [] }) => {
  return (
    <section className="current-deck">
      <h2>Your Deck ({cards.length} cards)</h2>
      <div className="deck-cards-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="deck-card">
            <p>{card.name}</p>
            <small>{card.type}</small>
            <div className="deck-card-buttons">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentDeck;
