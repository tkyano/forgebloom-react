// src/components/deck-page/RemoveDialog.jsx
import React from "react";
import "../../css/pages/deck-page/RemoveDialog.css";

const RemoveDialog = ({ card, onClose, onConfirm }) => {
  if (!card) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <span className="dialog-close" onClick={onClose}>&times;</span>
        <h2>Remove {card.name}?</h2>
        <p>Are you sure you want to remove this card from your deck?</p>
        <div className="dialog-buttons">
          <button className="confirm" onClick={() => onConfirm(card)}>Yes, remove</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveDialog;
