import { useState } from "react";
import "../../css/components/browse/CardGrid.css";

const CardGrid = ({ cards }) => {
  const [validImages, setValidImages] = useState({});
  const [visibleCount, setVisibleCount] = useState(50);

  const handleImageError = (id) => {
    setValidImages((prev) => ({ ...prev, [id]: false }));
  };

  const handleImageLoad = (id) => {
    setValidImages((prev) => ({ ...prev, [id]: true }));
  };

  const visibleCards = cards
    .filter((card) => card.image_uris?.normal && validImages[card.id] !== false)
    .slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 50);
  };

  return (
    <div className="card-grid-container">
      <div className="card-grid">
        {visibleCards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-image-wrapper">
              <img
                src={card.image_uris.normal}
                alt={card.name}
                onError={() => handleImageError(card.id)}
                onLoad={() => handleImageLoad(card.id)}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {visibleCount < cards.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
