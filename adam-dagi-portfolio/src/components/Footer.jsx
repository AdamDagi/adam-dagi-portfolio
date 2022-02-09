import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faGithub,
    faWhatsapp,
    faGoogle,
    faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
  
const Footer = () => {
    return (
        <div className="footer-conteiner">
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.github.com/learnbuildteach"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.whatsapp.com/learnbuildteach"
                    className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://www.google.com/learnbuildteach"
                    className="google social">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
                <a href="https://www.stackoverflow.com/learnbuildteach"
                    className="stackoverflow social">
                    <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                </a>
        </div>
    );
};

export default Footer;