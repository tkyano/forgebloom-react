import "./../css/pages/Home.css";
import Intro from "../components/home/Intro";
import FeaturedCards from "../components/home/FeaturedCards";
import FeaturedDecks from "../components/home/FeaturedDecks";
import Search from "../components/home/Search";
import Video from "../components/home/Video";


const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <h2 className="section-title">Welcome to ForgeBloom</h2>
                <Intro />
                <h2 className="section-title">Featured Cards</h2>
                <FeaturedCards />
            </div>

            <div className="home-right">
                <h2 className="section-title">Search</h2>
                <Search />

                <h2 className="section-title">Featured Decks</h2>
                <FeaturedDecks />

                <h2 className="section-title">Official Edge of Eternities Launch Trailer</h2>
                <Video />
            </div>
        </div>
    );
};

export default Home;