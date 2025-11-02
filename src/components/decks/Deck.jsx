import React from "react";
import { Link } from "react-router-dom";
import "../../css/components/decks/Deck.css";

const Deck = ({ image, title, description, deckId }) => {
  return (
    <Link to={`/decks/${deckId}`} className="mydeck-card">
      <img src={image} alt={title} />
      <div className="mydeck-info">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Deck;