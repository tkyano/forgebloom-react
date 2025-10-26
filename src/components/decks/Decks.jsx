import "../../css/components/decks/Decks.css";


const Decks = () => {
  return (
    <>
      <a href="#" className="mydeck-card">
        <img src="/images/ashling.jpg" alt="Mono Red Burn" />
        <div className="mydeck-info">
          <p>Mono Red Burn</p>
          <p>Fast and fiery—deal damage quickly to overwhelm your opponent before they can react</p>
        </div>
      </a>

      <a href="#" className="mydeck-card">
        <img src="/images/izzet.jpg" alt="Blue/Red Spells" />
        <div className="mydeck-info">
          <p>Blue/Red Spells</p>
          <p>Spell-heavy deck that controls the board while casting powerful instants and sorceries</p>
        </div>
      </a>

      <a href="#" className="mydeck-card">
        <img src="/images/arbiter.jpg" alt="White/Blue Bounce" />
        <div className="mydeck-info">
          <p>White/Blue Bounce</p>
          <p>Bounce and reset opponent’s threats while building a solid defense for the late game</p>
        </div>
      </a>

      <a href="#" className="mydeck-card">
        <img src="/images/gitaxius.jpg" alt="Blue Control" />
        <div className="mydeck-info">
          <p>Blue Control</p>
          <p>Counter their plans, draw extra cards, and dominate the late game with precision</p>
        </div>
      </a>

      <a href="#" className="mydeck-card">
        <img src="/images/ghalta.jpg" alt="Green Creature" />
        <div className="mydeck-info">
          <p>Green Creature</p>
          <p>Flood the board with mighty creatures and take advantage of strong combat synergies</p>
        </div>
      </a>
    </>
  );
};

export default Decks;