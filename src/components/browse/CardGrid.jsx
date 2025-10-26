import Card from "./Card";
import "../../css/components/browse/CardGrid.css";

const CardGrid = () => {
  return (
    <div className="card-grid">
      {/* Placeholders for now */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default CardGrid;
