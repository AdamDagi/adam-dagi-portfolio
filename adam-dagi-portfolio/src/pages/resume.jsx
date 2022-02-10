import React from "react";
  
const Resume = () => {
    return (
        <>
            <div className="resume-conteiner">
                <div className="header-cont">
                    <div className="resume-header">
                        <h1>RESUME</h1>
                    </div>
                </div>
                <div className="resume-document">
                    <ul className="resume-one">
                        <a href="#" className="res-one"></a>
                    </ul>
                </div>
                <div className="resume-info">
                    <ul>
                        <h3>Front-end Proficiencies</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <ul>
                        <h3>Front-end Proficiencies</h3>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDb, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Resume;