import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/components/home/FeaturedCards.css";

const FeaturedCards = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://tkyano.github.io/csce242/projects/part7/json/oracle-cards.json"
        );

        const cardsWithImages = response.data.filter(
          (card) => card.image_uris && card.image_uris.normal
        );

        // pick 10 random cards for the slideshow
        const shuffled = cardsWithImages.sort(() => 0.5 - Math.random());
        setCards(shuffled.slice(0, 10));
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Move to next card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [cards]);

  if (cards.length === 0) {
    return <div className="featured-card-container">Loading...</div>;
  }

  const currentCard = cards[currentIndex];

  return (
    <section className="featured-card-container slideshow">
      <div className="featured-card">
        <img src={currentCard.image_uris.normal} alt="" />
      </div>
    </section>
  );
};

export default FeaturedCards;
