import React from "react";
import Deck from "./Deck";
import "../../css/components/decks/Decks.css";

import deck1Img from "../../images/ashling.jpg";
import deck2Img from "../../images/izzet.jpg";
import deck3Img from "../../images/arbiter.jpg";
import deck4Img from "../../images/gitaxius.jpg";
import deck5Img from "../../images/ghalta.jpg";

const Decks = () => {
  const deckList = [
    {
      image: deck1Img,
      title: "Mono Red Burn",
      description: "Fast and fiery—deal damage quickly to overwhelm your opponent before they can react",
      deckId: "mono-red-burn",
    },
    {
      image: deck2Img,
      title: "Blue/Red Spells",
      description: "Spell-heavy deck that controls the board while casting powerful instants and sorceries",
      deckId: "blue-red-spells",
    },
    {
      image: deck3Img,
      title: "White/Blue Bounce",
      description: "Bounce and reset opponent’s threats while building a solid defense for the late game",
      deckId: "white-blue-bounce",
    },
    {
      image: deck4Img,
      title: "Blue Control",
      description: "Counter their plans, draw extra cards, and dominate the late game with precision",
      deckId: "blue-control",
    },
    {
      image: deck5Img,
      title: "Green Creature",
      description: "Flood the board with mighty creatures and take advantage of strong combat synergies",
      deckId: "green-creature",
    },
  ];

  return (
    <div className="decks-grid">
      {deckList.map((deck, idx) => (
        <Deck
          key={idx}
          image={deck.image}
          title={deck.title}
          description={deck.description}
          deckId={deck.deckId}
        />
      ))}
    </div>
  );
};

export default Decks;
