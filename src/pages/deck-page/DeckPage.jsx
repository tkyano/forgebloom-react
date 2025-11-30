import "../../css/pages/deck-page/DeckPage.css";
import DeckTitle from "./DeckTitle";
import CardSearch from "./CardSearch";
import CurrentDeck from "./CurrentDeck";
import DeckToolsBottom from "./DeckToolsBottom";
import RemoveDialog from "./RemoveDialog";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://forgebloom-server.onrender.com"
    : "http://localhost:3001";

const DeckPage = () => {
  const { deckId } = useParams();
  const [deckCards, setDeckCards] = useState([]);
  const [removeCard, setRemoveCard] = useState(null);

  // Load deck
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/decks/${deckId}`);
        setDeckCards(response.data.map(c => ({ ...c, count: c.count || 1 })));
      } catch (err) {
        console.error("Error fetching deck:", err);
      }
    };
    fetchDeck();
  }, [deckId]);

  // Add card
  const addCardToDeck = async (card) => {
    setDeckCards(prev => {
      const index = prev.findIndex(c => c.name === card.name);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].count += 1;
        return updated;
      }
      return [...prev, { ...card, count: 1 }];
    });

    try {
      await axios.post(`${API_BASE}/api/decks/${deckId}/add-card`, {
        name: card.name,
        type: card.type || "Unknown",
        image_uris: card.image_uris || {}
      });
    } catch (err) {
      console.error("Failed to add card:", err);
    }
  };

  // Increment
  const incrementCard = async (card) => {
    const updatedCount = card.count + 1;

    setDeckCards(prev =>
      prev.map(c => c.name === card.name ? { ...c, count: updatedCount } : c)
    );

    try {
      await axios.put(`${API_BASE}/api/decks/${deckId}/update-card`, {
        name: card.name,
        type: card.type || "Unknown",
        count: updatedCount,
        image_uris: card.image_uris || {}
      });
    } catch (err) {
      console.error("Failed to increment card:", err);
    }
  };

  // Decrement
  const decrementCard = async (card) => {
    const updatedCount = card.count - 1;

    if (updatedCount <= 0) {
      setRemoveCard(card);
      return;
    }

    setDeckCards(prev =>
      prev.map(c => c.name === card.name ? { ...c, count: updatedCount } : c)
    );

    try {
      await axios.put(`${API_BASE}/api/decks/${deckId}/update-card`, {
        name: card.name,
        type: card.type || "Unknown",
        count: updatedCount,
        image_uris: card.image_uris || {}
      });
    } catch (err) {
      console.error("Failed to decrement card:", err);
    }
  };

  // Confirm delete
  const confirmRemove = async (card) => {
    setDeckCards(prev => prev.filter(c => c.name !== card.name));
    setRemoveCard(null);

    try {
      await axios.delete(`${API_BASE}/api/decks/${deckId}/delete-card`, {
        data: {
          name: card.name,
          type: card.type || "Unknown"
        }
      });
    } catch (err) {
      console.error("Failed to delete card:", err);
    }
  };

  return (
    <main className="deck-builder-page">
      <DeckTitle title={deckId} />
      <div className="deck-builder-content">
        <CardSearch addCardToDeck={addCardToDeck} />
        <CurrentDeck
          cards={deckCards}
          incrementCard={incrementCard}
          decrementCard={decrementCard}
        />
      </div>
      <DeckToolsBottom />
      <RemoveDialog
        card={removeCard}
        onClose={() => setRemoveCard(null)}
        onConfirm={confirmRemove}
      />
    </main>
  );
};

export default DeckPage;
