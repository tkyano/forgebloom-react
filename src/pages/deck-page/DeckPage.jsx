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

  const addCardToDeck = async (card) => {
    setDeckCards(prev => {
      const index = prev.findIndex(c => c.name === card.name);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].count += 1;
        return updated;
      } else {
        return [...prev, { ...card, count: 1 }];
      }
    });

    try {
      await axios.post(`${API_BASE}/api/decks/${deckId}/add-card`, {
        name: card.name,
        type: card.type || "Unknown",
        image_uris: card.image_uris || {},
      });
    } catch (err) {
      console.error("Failed to save card:", err);
    }
  };

  const incrementCard = (card) => {
    setDeckCards(prev =>
      prev.map(c => c.name === card.name ? { ...c, count: c.count + 1 } : c)
    );
    // Optionally update server count here
  };

  const decrementCard = (card) => {
    const target = deckCards.find(c => c.name === card.name);
    if (!target) return;

    if (target.count <= 1) {
      setRemoveCard(target); // show remove confirmation dialog
    } else {
      setDeckCards(prev =>
        prev.map(c => c.name === card.name ? { ...c, count: c.count - 1 } : c)
      );
      updateDeckServer(card, target.count - 1);
    }
  };

  const confirmRemove = async (card) => {
    setDeckCards(prev => prev.filter(c => c.name !== card.name));
    setRemoveCard(null);

    try {
      await axios.post(`${API_BASE}/api/decks/${deckId}/remove-card`, {
        name: card.name,
        type: card.type || "Unknown"
      });
    } catch (err) {
      console.error("Failed to remove card from server:", err);
    }
  };

  const updateDeckServer = async (card, newCount) => {
    if (newCount <= 0) return;
    try {
      // Remove old and re-add with updated count
      await axios.post(`${API_BASE}/api/decks/${deckId}/add-card`, {
        name: card.name,
        type: card.type || "Unknown",
        image_uris: card.image_uris || {},
      });
    } catch (err) {
      console.error("Failed to update card count on server:", err);
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
