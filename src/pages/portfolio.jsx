import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faChrome
} from "@fortawesome/free-brands-svg-icons";
  
const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="colomn-1">
                    <div className="project-one project-conteiner">
                        <ul className="one">
                            <h1 className="project-title">TRAVEL APP</h1>
                            <a href="https://github.com/AdamDagi/project-01"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://adamdagi.github.io/project-01/"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-two project-conteiner">
                        <ul className="two">
                            <h1 className="project-title">QUIZ APP</h1>
                            <a href="https://github.com/AdamDagi/WEB_API_Challenge"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://adamdagi.github.io/WEB_API_Challenge/"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-three project-conteiner">
                        <ul className="three">
                            <h1 className="project-title">BUDGET TRACKER</h1>
                            <a href="https://github.com/AdamDagi/budget-tracker-pwa"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://budget-tracker-adam.herokuapp.com"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="colomn-2">
                    <div className="project-four project-conteiner">
                        <ul className="four">
                            <h1 className="project-title">PET APP</h1>
                            <a href="https://github.com/mkohn4/pet-project"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://warm-springs-61498.herokuapp.com"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-five project-conteiner">
                        <ul className="five">
                            <h1 className="project-title">TECH BLOG</h1>
                            <a href="https://github.com/AdamDagi/coding-blog-model-view-controller"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://codding-blog-mvc.herokuapp.com"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-six project-conteiner">
                        <ul className="six">
                            <h1 className="project-title">WEATHER FORECAST</h1>
                            <a href="https://github.com/AdamDagi/Weather_Forecast_Challenge"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://adamdagi.github.io/Weather_Forecast_Challenge/"
                                className="github social git faChrome">
                                <FontAwesomeIcon icon={faChrome} size="2x" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;