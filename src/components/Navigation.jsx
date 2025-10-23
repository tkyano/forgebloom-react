import {Outlet, Link} from "react-router-dom";
import "./../css/components/Navigation.css";

const Navigation  = () => {
    return (
        <nav id="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse-cards">Browse Cards</Link></li>
                <li><Link to="/create-deck">Create A Deck</Link></li>
                <li><Link to="/my-decks">My Decks</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;