import "../../css/pages/deck-page/DeckPage.css";
import DeckTitle from "./DeckTitle";
import CardSearch from "./CardSearch";
import CurrentDeck from "./CurrentDeck";
import DeckToolsBottom from "./DeckToolsBottom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DeckPage = () => {
  const { deckId } = useParams();
  const [deckCards, setDeckCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const response = await axios.get(`https://forgebloom-server.onrender.com/api/decks/${deckId}`);
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
      await axios.post(`https://forgebloom-server.onrender.com/api/decks/${deckId}/add-card`, {
        name: card.name,
        type: card.type || "Unknown",
        image_uris: card.image_uris || {},
      });
      console.log("Card saved to server!");
    } catch (err) {
      console.error("Failed to save card:", err);
    }
  };

  const incrementCard = (card) => {
    setDeckCards(prev =>
      prev.map(c => c.name === card.name ? { ...c, count: c.count + 1 } : c)
    );
  };

  const decrementCard = (card) => {
    setDeckCards(prev =>
      prev.map(c => c.name === card.name ? { ...c, count: c.count - 1 } : c)
          .filter(c => c.count > 0)
    );
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
    </main>
  );
};

export default DeckPage;
