import React from "react";
import "../../css/pages/deck-page/CardSearch.css";


const CardSearch = () => {
  return (
    <section className="card-search">
      <input type="search" placeholder="Search cards..." />
      <div className="card-results-grid"></div>
    </section>
  );
};

export default CardSearch;
