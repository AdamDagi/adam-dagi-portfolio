import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";
  
const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="colomn-1">
                    <div className="project-one project-conteiner">
                        <ul className="one">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-two project-conteiner">
                        <ul className="two">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-three project-conteiner">
                        <ul className="three">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="colomn-2">
                    <div className="project-four project-conteiner">
                        <ul className="four">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-five project-conteiner">
                        <ul className="five">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                    <div className="project-six project-conteiner">
                        <ul className="six">
                            <a href="https://www.github.com/learnbuildteach" className="project-title">PROJECT</a>
                            <a href="https://www.github.com/learnbuildteach"
                                className="github social git">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;