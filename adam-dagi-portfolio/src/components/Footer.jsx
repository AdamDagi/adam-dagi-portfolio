import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faGithub,
    faWhatsapp,
    faGoogle,
    faStackOverflow,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
  
const Footer = () => {
    return (
        <div className="footer-conteiner">
                <a href="https://github.com/AdamDagi"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://linkedin.com/in/shikhsaid-mugutdinov"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://stackoverflow.com/users/18176245/adam-dagi"
                    className="stackoverflow social">
                    <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                </a>
                <a href="https://www.facebook.com/adam.ray.nyc/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/ada.mdagi/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://+1(646) 325 46-27"
                    className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://mugutdinovshiha02@gmail.com"
                    className="google social">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
        </div>
    );
};

export default Footer;