import "../../css/components/home/PopUp.css";

const PopUp = ({ card, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="popup-close" onClick={onClose}>&times;</button>

        <img src={card.image_uris.normal} alt={card.name} />
        <h2>{card.name}</h2>
      </div>
    </div>
  );
};

export default PopUp;
