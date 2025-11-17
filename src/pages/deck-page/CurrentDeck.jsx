import React from "react";
import "../../css/pages/deck-page/CurrentDeck.css";

const CurrentDeck = ({ cards = [], incrementCard, decrementCard }) => {
  return (
    <section className="current-deck">
      <h2>Your Deck ({cards.reduce((sum, c) => sum + c.count, 0)} cards)</h2>
      <div className="deck-cards-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="deck-card">
            <p>{card.name}</p>
            <small>{card.type}</small>
            <p>Count: {card.count}</p>
            <div className="deck-card-buttons">
              <button onClick={() => incrementCard(card)}>+</button>
              <button onClick={() => decrementCard(card)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentDeck;
