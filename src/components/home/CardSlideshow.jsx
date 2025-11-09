import { useState, useEffect } from "react";
import "../../css/components/home/CardSlideshow.css";
import PopUp from "./PopUp";

const CardSlideshow = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  // Only run the slideshow when no popup is open
  useEffect(() => {
    if (selectedCard) return; // pause when popup is open

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [cards, selectedCard]);

  const currentCard = cards[currentIndex];

  return (
    <section className="featured-card-container slideshow">
      <div
        className="featured-card"
        onClick={() => setSelectedCard(currentCard)}
      >
        <img src={currentCard.image_uris.normal} alt={currentCard.name} />
      </div>

      {selectedCard && (
        <PopUp card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </section>
  );
};

export default CardSlideshow;
