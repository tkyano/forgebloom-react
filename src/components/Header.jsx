import "./../css/components/Header.css";
import Navigation from "./Navigation";
import HamburgurMenu from "./HamburgurMenu";

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-title">
                <img id="main-logo" src="/images/forgebloom-logo.png" />
                <h1 className="site-name">ForgeBloom</h1>
            </div>
            <Navigation />
            <HamburgurMenu />
        </header>
    );
};

export default Header;