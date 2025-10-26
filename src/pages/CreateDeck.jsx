import "./../css/pages/CreateDeck.css";
import PresetDeck from "../components/create/PresetDeck";
import DeckTools from "../components/create/DeckTools";

const CreateDeck = () => {
  return (
    <main className="create-deck-page">
    <section className="decks-container">
        <h2>Choose a Deck Preset</h2>
        <PresetDeck />
    </section>

    <aside className="deck-tools-wrapper">
        <DeckTools />
    </aside>
    </main>

  );
};

export default CreateDeck;
