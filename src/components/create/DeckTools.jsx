import "../../css/components/create/DeckTools.css";

const DeckTools = () => {
  return (
    <div className="deck-tools">
      <a href="/forgebloom-react/decks/new-deck" className="new-deck-btn">New Deck</a>

      <div className="filter-group">
        <h3>Format</h3>
        <select>
          <option value="any"></option>
          <option>Commander</option>
          <option>Standard</option>
          <option>Pauper</option>
          <option>Modern</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Colors</h3>
        <label><input type="checkbox" /> White</label>
        <label><input type="checkbox" /> Black</label>
        <label><input type="checkbox" /> Blue</label>
        <label><input type="checkbox" /> Red</label>
        <label><input type="checkbox" /> Green</label>
        <label><input type="checkbox" /> Colorless</label>
      </div>

      <div className="filter-group">
        <h3>Deck Size</h3>
        <select>
          <option>Any</option>
          <option>&lt; 60</option>
          <option>60 Cards</option>
          <option>100 Cards</option>
        </select>
      </div>
    </div>
  );
};

export default DeckTools;
