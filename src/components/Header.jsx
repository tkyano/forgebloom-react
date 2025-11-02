import "./../css/components/Header.css";
import Navigation from "./Navigation";
import logo from "../images/forgebloom-logo.png";


const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-title">
                <img id="main-logo" src={logo}/>
                <h1 className="site-name">ForgeBloom</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;