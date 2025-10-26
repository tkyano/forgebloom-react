import "../../css/components/home/FeaturedDecks.css";


const FeaturedDecks = () => {
    return (
        <section className="featured-decks-container">
            {/*Also from hatGTP til json is developed */}
            {[...Array(2)].map((_, i) => (
                <div key={i} className="deck-placeholder"></div>
            ))}
        </section>
    );
};

export default FeaturedDecks;