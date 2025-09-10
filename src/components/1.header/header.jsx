import React from "react";
import "./header.css";

const Header = () => {
    const [ismenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!ismenuOpen);
    };

    return (
<header className="header">
    <nav className="navbar">
        <a href="/" className="vite-logo">
                <img src="/vite.svg" alt="Vite_Logo" />
            </a>
        

        <nav className={'navmenu ${ismenuOpen ? "active" : ""}'}>
            <ul className="navlinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <button className="burger-menu" onClick={toggleMenu}>
            ☰ 
        </button>
    </nav>
</header>
    );
    }
export default Header;