import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-conteiner">
            <div className="navigation-conteiner">
                <Link to="/home">HOME</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/resume">RESUME</Link>
            </div>
        </div>
    );
};

export default Header;