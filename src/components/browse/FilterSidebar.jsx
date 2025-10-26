import "../../css/components/browse/FilterSidebar.css";


const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <h2>Filter Cards</h2>

      <div className="filter-group">
        <h3>Color</h3>
        <label><input type="checkbox" /> White</label>
        <label><input type="checkbox" /> Black</label>
        <label><input type="checkbox" /> Blue</label>
        <label><input type="checkbox" /> Red</label>
        <label><input type="checkbox" /> Green</label>
        <label><input type="checkbox" /> Colorless</label>
      </div>

      <div className="filter-group">
        <h3>Cost</h3>
        <select>
          <option value="=">=</option>
          <option value="<">&lt;</option>
          <option value=">">&gt;</option>
        </select>
        <input type="number" placeholder="Mana Cost" />
      </div>

      <div className="filter-group">
        <h3>Card Type</h3>
        <label><input type="checkbox" /> Creature</label>
        <label><input type="checkbox" /> Enchantment</label>
        <label><input type="checkbox" /> Land</label>
        <label><input type="checkbox" /> Instant</label>
        <label><input type="checkbox" /> Sorcery</label>
        <label><input type="checkbox" /> Planeswalker</label>
        <label><input type="checkbox" /> Artifact</label>
        <label><input type="checkbox" /> Battle</label>
      </div>
    </aside>
  );
};

export default FilterSidebar;