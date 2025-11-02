import "../../css/components/browse/Card.css";

const Card = () => {
  return (
    <div className="card">
      <h4 className="card-name">Card Name</h4>
      <p className="card-cost">Cost: 1</p>
      <p className="card-type">Type: Creature</p>
    </div>
  );
};

export default Card;
