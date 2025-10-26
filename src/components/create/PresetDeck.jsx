import "../../css/components/create/PresetDeck.css";

const PresetDeck = () => {
  return (
    <div className="preset-deck">
      <div className="preset-card">
        <h3>Starter</h3>
        <p>
          A beginner-friendly deck to learn the basics of the game with balanced
          creatures and spells.
        </p>
      </div>

      <div className="preset-card">
        <h3>Aggro</h3>
        <p>
          Fast and furious—overwhelm your opponent with creatures and direct
          damage early.
        </p>
      </div>

      <div className="preset-card">
        <h3>Control</h3>
        <p>
          Slow the game down and control the board with spells, counterspells,
          and removal.
        </p>
      </div>

      <div className="preset-card">
        <h3>Midrange</h3>
        <p>
          Flexible strategy that balances aggression and defense, adapting to
          the game.
        </p>
      </div>

      <div className="preset-card">
        <h3>Mono Base</h3>
        <p>
          Focused on a single color for consistency and strong thematic synergy.
        </p>
      </div>

      <div className="preset-card">
        <h3>Chaos</h3>
        <p>
          Unpredictable deck full of random effects for fun and surprise plays.
        </p>
      </div>
    </div>
  );
};

export default PresetDeck;