import React from "react";
  
const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="colomn-1">
                    <div className="project-one">
                        <ul>
                        <a href="#" className="project-title">Project 1</a>
                        </ul>
                    </div>
                    <div className="project-two">
                        <ul>
                        <a href="#" className="project-title">Project 2</a>
                        </ul>
                    </div>
                    <div className="project-three">
                        <ul>
                        <a href="#" className="project-title">Project 3</a>
                        </ul>
                    </div>
                </div>
                <div className="colomn-2">
                    <div className="project-four">
                        <ul>
                        <a href="#" className="project-title">Project 4</a>
                        </ul>
                    </div>
                    <div className="project-five">
                        <ul>
                        <a href="#" className="project-title">Project 5</a>
                        </ul>
                    </div>
                    <div className="project-six">
                        <ul>
                        <a href="#" className="project-title">Project 6</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;