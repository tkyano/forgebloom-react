import React, { useState } from "react";
import "../../css/components/cards/AddCard.css";

const AddCard = ({ closeAddDialog, updateCards }) => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = {
      name: event.target.name.value,
      image_url: event.target.image_url.value,
    };

    try {
      const response = await fetch(
        "https://forgebloom-server.onrender.com/api/oracle-cards",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        const newCard = await response.json();
        updateCards(newCard);
        setResult("Card added successfully!");
        event.target.reset();
        closeAddDialog();
      } else {
        const errorText = await response.text();
        setResult("Error: " + errorText);
      }
    } catch (err) {
      setResult("Error: " + err.message);
    }
  };

  return (
    <div className="add-card-dialog">
      <div className="dialog-content">
        <span className="close-btn" onClick={closeAddDialog}>
          &times;
        </span>
        <h3>Add New Card</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Card Name:</label>
            <input type="text" id="name" name="name" required minLength="2" />
          </p>
          <p>
            <label htmlFor="image_url">Image URL:</label>
            <input type="url" id="image_url" name="image_url" required />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
