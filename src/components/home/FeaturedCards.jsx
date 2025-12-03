import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/components/home/FeaturedCards.css";
import CardSlideshow from "./CardSlideshow";

const FeaturedCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://forgebloom-server.onrender.com/api/oracle-cards"
        );

        const responseData = Array.isArray(response.data) ? response.data : [];
        const cardsWithImages = responseData.filter(
          (card) => card.image_uris && card.image_uris.normal
        );

        const shuffled = cardsWithImages.sort(() => 0.5 - Math.random());
        setCards(shuffled.slice(0, 10));
      } catch (error) {
        console.error("Error fetching cards:", error);
        setCards([]);
      }
    };


    fetchCards();
  }, []);

  if (cards.length === 0) return <div>Loading...</div>;

  return (
    <section className="featured-card-container">
      <CardSlideshow cards={cards} />
    </section>
  );
};

export default FeaturedCards;
