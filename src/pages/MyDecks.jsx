import "./../css/pages/MyDecks.css";
import DeckTools from "../components/create/DeckTools";
import Decks from "../components/decks/Decks";
import "./../css/pages/MyDecks.css";

const MyDecks = () => {
  return (
    <main className="mydeck-page">
      <section className="mydeck-container">
        <h2>My Decks</h2>
        <div className="mydeck-row">
          <Decks />
        </div>
      </section>

      <aside className="deck-tools-wrapper">
        <DeckTools />
      </aside>
    </main>
  );
};

export default MyDecks;