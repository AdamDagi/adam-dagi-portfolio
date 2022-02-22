import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-conteiner">
            <div className="navigation-conteiner">
                <NavLink to="home" className={({isActive}) =>(isActive ? "active" : "")}>ABOUT ME</NavLink>
                <NavLink to="portfolio" className={({isActive}) =>(isActive ? "active" : "")}>PORTFOLIO</NavLink>
                <NavLink to="contact" className={({isActive}) =>(isActive ? "active" : "")}>CONTACT</NavLink>
                <NavLink to="resume" className={({isActive}) =>(isActive ? "active" : "")}>RESUME</NavLink>
            </div>
        </div>
    );
};

export default Header;