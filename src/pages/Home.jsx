import "./../css/pages/Home.css";
import Intro from "../components/home/Intro";
import FeaturedCards from "../components/home/FeaturedCards";
import FeaturedDecks from "../components/home/FeaturedDecks";
import Search from "../components/home/Search";
import VideoSlideshow from "../components/home/VideoSlideshow";

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

        <h2 className="section-title">Check Out New Trailers Here</h2>
        <VideoSlideshow />
      </div>
    </div>
  );
};

export default Home;
