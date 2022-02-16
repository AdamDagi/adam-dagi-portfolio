import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleDown,
    faEnvelope
} from "@fortawesome/free-regular-svg-icons";
import {
    faPrint
} from "@fortawesome/free-solid-svg-icons";
  
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
                        <div className="res-one">
                            <div className="buttons-res-conteiner">
                                <div className="resume-download">
                                    <a href="../../documents/Shikhsaid_Mugutdinov_Resume.PDF" download="resume" target='_blank'>
                                    <FontAwesomeIcon icon={faCircleDown} className="icon" size="2x" />
                                    </a>
                                </div>
                                <div className="resume-email">
                                    <a href="../../documents/Shikhsaid_Mugutdinov_Resume.PDF" email="resume" target='_blank'>
                                    <FontAwesomeIcon icon={faEnvelope} className="icon" size="2x" />
                                    </a>
                                </div>
                                <div className="resume-print">
                                    <a href="../../documents/Shikhsaid_Mugutdinov_Resume.PDF" print="resume" target='_blank'>
                                    <FontAwesomeIcon icon={faPrint} className="icon" size="2x" />
                                    </a>
                                </div>
                            </div>
                            <embed src="../../documents/Shikhsaid_Mugutdinov_Resume.PDF" width="500" height="375" type="application/pdf" id="pdfDocument"></embed>
                        </div>
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