import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import "./../css/components/Navigation.css";

const Navigation  = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    /* [Variable name, ] */
    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="main-nav">
            <div onClick={toggleMenu} id="toggle-nav" href="#">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={menuOpen ? "" : "hide-small"}>
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