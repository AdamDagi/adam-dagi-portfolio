import React from "react";

const Header = () => {
    return (
        <div className="header-conteiner">
            <div className="navigation-conteiner">
                <a class="active" href="#home">HOME</a>
                <a href="#news">PORTFOLIO</a>
                <a href="#contact">CONTACT</a>
                <a href="#about">RESUME</a>
            </div>
        </div>
    );
};

export default Header;