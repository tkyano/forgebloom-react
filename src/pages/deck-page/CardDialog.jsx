import React from "react";
import "../../css/pages/deck-page/CardDialog.css";

const CardDialog = ({ card, onClose, onAdd, deckMode, onIncrement, onDecrement }) => {
  if (!card) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <span className="dialog-close" onClick={onClose}>&times;</span>
        <h2>{card.name}</h2>
        {card.image_uris?.normal && (
          <img src={card.image_uris.normal} alt={card.name} />
        )}

        {deckMode ? (
          <div className="deck-controls">
            <button onClick={() => onIncrement(card)}>+</button>
            <span>{card.count}</span>
            <button onClick={() => onDecrement(card)}>-</button>
          </div>
        ) : (
          <button onClick={() => onAdd(card)}>Add to Deck</button>
        )}
      </div>
    </div>
  );
};

export default CardDialog;
