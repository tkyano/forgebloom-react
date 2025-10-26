import "../../css/components/home/FeaturedCards.css";

const FeaturedCards = () => {
    return (
        <section className="featured-card-container">
            {/* Section from ChatGTP to create a placeholder til we get the json files*/}
            {[...Array(6)].map((_, i) => (
                <div key={i} className="card-placeholder"></div>
            ))}
        </section>
    );
};

export default FeaturedCards;