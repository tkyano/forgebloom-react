import "../../css/pages/deck-page/DeckPage.css";
import DeckTitle from "./DeckTitle";
import CardSearch from "./CardSearch";
import CurrentDeck from "./CurrentDeck";
import DeckToolsBottom from "./DeckToolsBottom";
import { useParams } from "react-router-dom";

const DeckPage = () => {
  const { deckId } = useParams();

  // Hardcoded deck info for now
  const deckData = {
    "mono-red-burn": {
      title: "Mono Red Burn",
      cards: [
        { name: "Lightning Bolt", type: "Instant" },
        { name: "Shock", type: "Instant" },
        { name: "Goblin Guide", type: "Creature" },
      ],
    },
    "blue-red-spells": {
      title: "Blue/Red Spells",
      cards: [
        { name: "Counterspell", type: "Instant" },
        { name: "Fireball", type: "Sorcery" },
      ],
    },
    "white-blue-bounce": {
      title: "White/Blue Bounce",
      cards: [
        { name: "Unsummon", type: "Instant" },
        { name: "Azorius Charm", type: "Instant" },
      ],
    },
    "blue-control": {
      title: "Blue Control",
      cards: [
        { name: "Brainstorm", type: "Instant" },
        { name: "Force of Will", type: "Instant" },
      ],
    },
    "green-creature": {
      title: "Green Creature",
      cards: [
        { name: "Llanowar Elves", type: "Creature" },
        { name: "Ghalta, Primal Hunger", type: "Creature" },
      ],
    },
  };

  const deck = deckData[deckId] || { title: "Unknown Deck", cards: [] };

  return (
    <main className="deck-builder-page">
      <DeckTitle title={deck.title} />
      <div className="deck-builder-content">
        <CardSearch />
        <CurrentDeck cards={deck.cards} />
      </div>
      <DeckToolsBottom />
    </main>
  );
};

export default DeckPage;
