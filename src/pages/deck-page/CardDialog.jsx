import React, { useState } from "react";
import "../../css/pages/deck-page/CardDialog.css";

const CardDialog = ({ card, onClose, onAdd }) => {
  const [count, setCount] = useState(1);

  if (!card) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <span className="dialog-close" onClick={onClose}>&times;</span>

        <h2>{card.name}</h2>

        {card.image_uris?.normal && (
          <img src={card.image_uris.normal} alt={card.name} />
        )}

        <label style={{ marginTop: "10px", display: "block" }}>
          Copies to Add:
        </label>
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          style={{ width: "60px" }}
        />

        <button onClick={() => onAdd(card, count)}>
          Add {count} to Deck
        </button>
      </div>
    </div>
  );
};

export default CardDialog;
